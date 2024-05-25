import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async getAllUsers() {
    return this.prisma.user.findMany()
  }

  async findOne(userId: string): Promise<User | undefined> {
    return this.prisma.user.findUnique({ where: { userId: userId } })
  }

}
