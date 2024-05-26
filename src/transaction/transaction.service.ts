import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TransactionDto } from './dto/create-transaction.dto'
@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService,

  ) { }

  async getTransactions() {
    return this.prisma.transaction.findMany()
  }

  async createTransaction(transactionDto: TransactionDto, userId: number) {
    return this.prisma.transaction.create({
      data: {
        referenceNo: transactionDto.referenceNo,
        totalTransferAmount: transactionDto.totalTransferAmount,
        totalTransferRecord: transactionDto.totalTransferRecord,
        fromAccountNumber: transactionDto.fromAccountNumber,
        transferDate: transactionDto.transferDate,
        role: transactionDto.role,
        submitDateTime: transactionDto.submitDateTime,
        instructionType: transactionDto.instructionType,
        makerUsername: transactionDto.makerUsername,
        transferType: transactionDto.transferType,
        status: transactionDto.status,
        user: {
          connect: { id: userId },
        },
        transactionDetails: {
          create: {
            accountNumber: transactionDto.accountNumber,
            accountBank: transactionDto.accountBank,
            accountName: transactionDto.accountName,
          },
        },
      },
    });
  }
}