import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly AuthService: AuthService) { }

  @Post('/register')
  async register(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.AuthService.register(username, email, password)
  }

}
