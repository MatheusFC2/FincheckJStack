import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
export declare class BankAccountsService {
    create(createBankAccountDto: CreateBankAccountDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBankAccountDto: UpdateBankAccountDto): string;
    remove(id: number): string;
}
