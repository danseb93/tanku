import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller.js';
import { ProductsService } from './services/products.service.js';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [
    ProductsService,
  ],
})
export class ProductsModule {}
