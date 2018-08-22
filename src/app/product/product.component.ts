import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products/products.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId;
  product;

  constructor( 
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.productId = params.get('productId');
      });
    
    this.productsService
      .getProduct(this.productId)
      .subscribe((product) =>{
        this.product = product;
        console.log(product);
      })
      
  }

}
