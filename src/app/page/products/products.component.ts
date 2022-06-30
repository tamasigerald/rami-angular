import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import type { Product } from 'src/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  getProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  filterProducts(event: Event) {
    const target = event?.target as HTMLInputElement;
    const query = target.value.toLowerCase();

    const filtered = !!query
      ? this.products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      : this.products;

    this.filteredProducts = filtered;
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
