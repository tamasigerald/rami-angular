import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/types';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @Input() products: Product[] = [];

  constructor() {}

  ngOnInit(): void {}

  addToCart(product: Product) {
    console.log(product);
  }
}
