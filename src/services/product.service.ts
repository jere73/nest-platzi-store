import { Injectable, NotFoundException, ParseUUIDPipe } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Injectable()
export class ProductService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla bla',
      price: 122,
      image: '',
      stock: 1,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id == id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found.`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId++;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);

    if (!product) {
      throw new NotFoundException(`Product #${id} not found to update.`);
    }

    const productIndex = this.products.findIndex((item) => {
      return item.id == id;
    });

    this.products[productIndex] = {
      ...product,
      ...payload,
    };

    return this.products[productIndex];
  }

  delete(id: number) {
    const product = this.findOne(id);

    if (!product) {
      throw new NotFoundException(`Product #${id} not found to update.`);
    }

    const productIndex = this.products.findIndex((item) => {
      return item.id === id;
    });

    this.products.splice(productIndex, 1);

    return this.products;
  }
}
