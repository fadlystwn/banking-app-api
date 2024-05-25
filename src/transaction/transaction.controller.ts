import { Controller, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
  ) { }

  @Get('/transactions')
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

}
