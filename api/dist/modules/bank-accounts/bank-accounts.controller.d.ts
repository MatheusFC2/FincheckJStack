import { BankAccountsService } from './bank-accounts.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
export declare class BankAccountsController {
    private readonly bankAccountsService;
    constructor(bankAccountsService: BankAccountsService);
    create(createBankAccountDto: CreateBankAccountDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBankAccountDto: UpdateBankAccountDto): string;
    remove(id: string): string;
}
