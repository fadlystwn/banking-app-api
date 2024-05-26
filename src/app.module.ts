import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TransactionService } from './transaction/transaction.service';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionModule } from './transaction/transaction.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [ConfigModule.forRoot(), PassportModule, AuthModule, UserModule, TransactionModule],
  controllers: [AppController, UserController, AuthController, TransactionController],
  providers: [AppService, PrismaService, UserService, AuthService, JwtService, TransactionService],
})
export class AppModule { }
