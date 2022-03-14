import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

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
    return this.products.find((item) => item.id == id);
  }

  create(payload: any) {
    this.counterId++;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);

    if (product) {
      const productIndex = this.products.findIndex((item) => {
        return item.id == id;
      });

      this.products[productIndex] = {
        ...product,
        ...payload,
      };
      return this.products[productIndex];
    }

    return null;
  }

  delete(id: number) {
    const product = this.findOne(id);

    if (product) {
      const productIndex = this.products.findIndex((item) => {
        return item.id === id;
      });

      this.products.splice(productIndex, 1);
    }
    return this.products;
  }
}
