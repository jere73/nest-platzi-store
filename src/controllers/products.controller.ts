import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

import { ProductService } from 'src/services/product.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get('/')
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = 'track',
  ) {
    return this.productService.findAll();
  }

  @Get('filter')
  getFilter() {
    return {
      message: 'Filtro',
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() payload: any) {
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
