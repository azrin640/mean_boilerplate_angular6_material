import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-admin-new-product-category',
  templateUrl: './admin-new-product-category.component.html',
  styleUrls: ['./admin-new-product-category.component.scss']
})
export class AdminNewProductCategoryComponent implements OnInit {

  invalidCategory = false;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
  }

  onSubmit(category: HTMLInputElement){   
    category.value;

    this.productsService.createProductCategory(category)
      .subscribe((response: any) => {
        if(response.code === 11000){
          this.invalidCategory = true;
        }
        if(response._id){
          console.log("Success");
        }
        console.log(response); 
        
      })
  }

}
