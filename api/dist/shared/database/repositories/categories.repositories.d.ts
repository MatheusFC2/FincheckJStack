import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
export declare class CategoriesRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findMany(findManyDto: Prisma.CategoryFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        userId: string;
        name: string;
        icon: string;
        type: import(".prisma/client").$Enums.TransactionType;
    }[]>;
}
