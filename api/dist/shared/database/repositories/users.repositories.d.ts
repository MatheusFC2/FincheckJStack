import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
export declare class UsersRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createUserDto: Prisma.UserCreateArgs): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique(findUnique: Prisma.UserFindUniqueArgs): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
