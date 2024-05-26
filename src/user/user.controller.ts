import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) { }
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllUsers() {
    return this.UserService.getAllUsers()
  }
}
