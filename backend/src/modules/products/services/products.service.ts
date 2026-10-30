import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto.js';

@Injectable()
export class ProductsService {
  constructor() {}

  async products(): Promise<{ products: ProductDto[] }> {
    try {
      const response = await fetch('https://fakestoreapi.com/products');

      if (!response.ok) {
        throw new HttpException(
          'Error al obtener los productos de la API externa',
          HttpStatus.BAD_GATEWAY,
        );
      }

      const data: ProductDto[] = await response.json();

      return {
        products: data,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Error de conexión con el servicio de productos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}