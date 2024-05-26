import { IsString, IsNotEmpty, IsNumber, IsDate, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export enum Role {
    MAKER = 'MAKER',
    APPROVER = 'APPROVER'
}

export enum InstructionType {
    IMMEDIATE = 'IMMEDIATE',
    STANDING_INSTRUCTION = 'STANDING_INSTRUCTION'
}

export enum TransferType {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE'
}

export enum Status {
    AWAITING_APPROVAL = 'AWAITING_APPROVAL',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED'
}

export class TransactionDto {
    @IsString()
    @IsNotEmpty()
    readonly referenceNo: string;

    @IsNumber()
    readonly totalTransferAmount: number;

    @IsNumber()
    readonly totalTransferRecord: number;

    @IsString()
    readonly fromAccountNumber: string;

    @IsDate()
    @Type(() => Date)
    readonly transferDate: Date;

    @IsEnum(Role)
    readonly role: Role;

    @IsDate()
    @Type(() => Date)
    readonly submitDateTime: Date;

    @IsEnum(InstructionType)
    readonly instructionType: InstructionType;

    @IsString()
    readonly makerUsername: string;

    @IsEnum(TransferType)
    readonly transferType: TransferType;

    @IsEnum(Status)
    readonly status: Status;

    @IsString()
    readonly accountNumber: string;

    @IsString()
    readonly accountBank: string;

    @IsString()
    readonly accountName: string;
}
