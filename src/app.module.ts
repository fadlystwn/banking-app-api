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

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService, PrismaService, UserService, AuthService, JwtService],
})
export class AppModule { }
