import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) { }

  async getTransactions() {
    return this.prisma.transaction.findMany()
  }
}
