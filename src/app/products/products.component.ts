import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products = [];
  filteredProducts = [];
  categories = [];
  category;

  constructor(
    route: ActivatedRoute,
    private productsService : ProductsService
  ) {

      // Get all products
      this.productsService
        .getProducts()
        .pipe(
          switchMap((products: any) => {
            this.products = products;            
            return route.queryParamMap;
          })
        )
        .subscribe(params => { 
            
            this.category = params.get('category');
            this.filteredProducts = (this.category) ?
              this.products.filter(p => p.category === this.category) :
              this.products;
        });

      // Get all categories
      this.productsService.getProductCategories()
        .subscribe((response: any) => {
          response.forEach(function(element){
          });
          this.categories = response;
        });
   }

  ngOnInit() {    
  }

}
