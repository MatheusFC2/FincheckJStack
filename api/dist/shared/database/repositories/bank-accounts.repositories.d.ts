import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
export declare class BankAccountsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findMany(findManyDto: Prisma.BankAccountFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        userId: string;
        name: string;
        initialBalance: number;
        type: import(".prisma/client").$Enums.BankAccountType;
        color: string;
    }[]>;
    findFirst(findFirstDto: Prisma.BankAccountFindFirstArgs): Prisma.Prisma__BankAccountClient<{
        id: string;
        userId: string;
        name: string;
        initialBalance: number;
        type: import(".prisma/client").$Enums.BankAccountType;
        color: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(createDto: Prisma.BankAccountCreateArgs): Prisma.Prisma__BankAccountClient<{
        id: string;
        userId: string;
        name: string;
        initialBalance: number;
        type: import(".prisma/client").$Enums.BankAccountType;
        color: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateDto: Prisma.BankAccountUpdateArgs): Prisma.Prisma__BankAccountClient<{
        id: string;
        userId: string;
        name: string;
        initialBalance: number;
        type: import(".prisma/client").$Enums.BankAccountType;
        color: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(deleteDto: Prisma.BankAccountDeleteArgs): Prisma.Prisma__BankAccountClient<{
        id: string;
        userId: string;
        name: string;
        initialBalance: number;
        type: import(".prisma/client").$Enums.BankAccountType;
        color: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
