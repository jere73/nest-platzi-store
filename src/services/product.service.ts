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
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId++;

    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, payload: any) {
    let message = 'Product Not Found';

    const productIndex = this.products.findIndex((item) => {
      return item.id === id;
    });

    if (productIndex) {
      this.products[productIndex] = {
        id,
        ...payload,
      };
      message = 'Product Updated.';
    }

    return message;
  }

  delete(id: number) {
    let message = 'Product Not Found';

    const productIndex = this.products.findIndex((item) => {
      return item.id === id;
    });

    if (productIndex) {
      this.products.splice(productIndex, 1);
      message = 'Product Deleted';
    }
    return message;
  }
}
