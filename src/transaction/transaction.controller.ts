import { Controller, Get, Post, Query, ParseIntPipe, Body, Logger, UseGuards } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDto } from './dto/create-transaction.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
  ) { }


  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllTransactions() {
    try {
      const transactions = await this.transactionService.getTransactions();
      return {
        success: true,
        data: transactions,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch transactions',
        error: error.message,
      };
    }
  }

  @Post()
  async createTransaction(
    @Body() transactionDto: TransactionDto,
    @Query('userId', ParseIntPipe) userId: number
  ) {
    try {
      const transaction = await this.transactionService.createTransaction(transactionDto, userId);
      return {
        success: true,
        message: 'Transaction created successfully',
        data: transaction,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to create transaction',
        error: error.message,
      };
    }
  }
}