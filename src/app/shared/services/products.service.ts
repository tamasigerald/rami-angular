import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import type { Product } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
  }

  getSortedProducts(sort: 'asc' | 'desc') {
    return this.http.get<Product[]>(
      `${environment.apiUrl}/products?sort=${sort}`
    );
  }

  getProductsByCategory(category: string) {
    return this.http.get<Product[]>(
      `${environment.apiUrl}/products/category/${category}`
    );
  }

  addProduct(product: Product) {
    return this.http.post<Product>(`${environment.apiUrl}/products`, product);
  }

  updateProduct(id: number, product: Product) {
    return this.http.put<Product>(
      `${environment.apiUrl}/products/${id}`,
      product
    );
  }
}
