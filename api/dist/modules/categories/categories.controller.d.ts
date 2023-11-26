import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        userId: string;
        name: string;
        icon: string;
        type: import(".prisma/client").$Enums.TransactionType;
    }[]>;
}
