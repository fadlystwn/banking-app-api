import { IsString, IsEmail, IsEnum } from 'class-validator';

export enum Role {
    MAKER = 'MAKER',
    APPROVER = 'APPROVER'
}

export class CreateUserDto {
    @IsString()
    readonly corporateAccountNumber: string;

    @IsString()
    readonly corporateName: string;

    @IsString()
    readonly userId: string;

    @IsString()
    readonly username: string;

    @IsEnum(Role)
    readonly role: Role;

    @IsString()
    readonly phoneNumber: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly password: string;
}
