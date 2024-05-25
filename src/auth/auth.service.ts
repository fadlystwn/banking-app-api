import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) { }

  async register(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword
      }
    })
  }

  async signIn(userId: string, corporateAccountNumber: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(userId);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (user.corporateAccountNumber !== corporateAccountNumber) {
      throw new UnauthorizedException('Invalid user');
    }

    const isPasswordValid = await bcrypt.compare(pass, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { sub: user.userId, corporateAccountNumber: user.corporateAccountNumber };

    return {
      access_token: await this.jwtService.signAsync(payload, { secret: process.env.JWT_SECRET })
    };
  }
}
