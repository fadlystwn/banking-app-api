import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto)
  }
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  signIn(@Body() loginUserDto: LoginUserDto) {
    const { userId, corporateAccountNumber, password } = loginUserDto;
    return this.authService.signIn(userId, corporateAccountNumber, password)
  }
}
