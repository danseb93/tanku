import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductsResponseDto } from './dto/product.dto.js';
import { ProductsService } from './services/products.service.js';


@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly products: ProductsService) {}

  @Get()
  @ApiOperation({
    summary: 'Products documents across titles, metadata, and content',
  })
  @ApiOkResponse({ type: ProductsResponseDto })
  async findAll(): Promise<ProductsResponseDto> {
    const data = await this.products.products();
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Products completed successfully',
      data: data.products,
    };
  }
}
