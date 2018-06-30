import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  distribution = 100/3;
  products = [];

  constructor(
    private productsService : ProductsService
  ) { }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe((response: any) => {
        console.log(response);
        this.products = response;
      });
  }

}
