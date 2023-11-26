import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  findAllByUserId() {
    return `This action returns all categories`;
  }
}
