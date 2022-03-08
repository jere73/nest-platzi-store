import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = 'track',
  ) {
    // const { limit, offset } = params;

    return `products ${limit} ${offset} ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return `Tengo un filtro`;
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return `product ${id}`;
  }
}
