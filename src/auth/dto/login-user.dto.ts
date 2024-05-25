import { IsString } from 'class-validator';

export class LoginUserDto {
    @IsString()
    readonly corporateAccountNumber: string;

    @IsString()
    readonly userId: string;

    @IsString()
    readonly password: string;
}
