import { Injectable, Logger } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(private readonly prisma: PrismaService) { }

  async getAllUsers() {
    return this.prisma.user.findMany()
  }

  async findOne(userId: string): Promise<User | undefined> {
    this.logger.log(userId)
    return this.prisma.user.findUnique({ where: { userId: userId } })
  }

}
