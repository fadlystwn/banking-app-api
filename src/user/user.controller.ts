import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) { }
  @Get()
  async getAllUsers() {
    return this.UserService.getAllUsers()
  }
}
