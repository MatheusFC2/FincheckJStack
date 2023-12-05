"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const IsPublic_1 = require("../../shared/decorators/IsPublic");
const transactions_repositories_1 = require("../../shared/database/repositories/transactions.repositories");
let TransactionsService = class TransactionsService {
    constructor(transactionsRepo) {
        this.transactionsRepo = transactionsRepo;
    }
    create(createTransactionDto) {
        return 'This action adds a new transaction';
    }
    findAllByUserId(userId) {
        return this.transactionsRepo.findMany({
            where: { userId },
        });
    }
    update(id, updateTransactionDto) {
        return `This action updates a #${id} transaction`;
    }
    remove(id) {
        return `This action removes a #${id} transaction`;
    }
};
TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    (0, IsPublic_1.IsPublic)(),
    __metadata("design:paramtypes", [transactions_repositories_1.TransactionsRepository])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map