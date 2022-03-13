import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/')
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = 'track',
  ) {
    // const { limit, offset } = params;

    return {
      limit: limit,
      offset: offset,
      brand: brand,
    };
  }

  @Get('filter')
  getFilter() {
    return {
      message: 'Filtro',
    };
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return {
      message: `Product ${id}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Se eliminó el producto ${id}`,
    };
  }
}
