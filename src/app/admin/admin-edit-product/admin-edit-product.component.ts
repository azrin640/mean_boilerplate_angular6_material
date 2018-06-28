import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProductsService } from '../../services/products/products.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.scss']
})
export class AdminEditProductComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private product: any,
    private editProductDialog: MatDialogRef<AdminEditProductComponent>,
    private productsService: ProductsService
  ) { }

  title="Edit Product";
  categories;
  invalidInput;

  ngOnInit() {
    this.productsService.getProductCategories()
      .subscribe((response: any) => {
        this.categories = response;
      })
  }

  onSubmit(product: HTMLInputElement){
    this.productsService.editProduct(product)
      .subscribe((response: any) => {
        if(response && response._id){
          this.editProductDialog.close();
        }
        else{
          this.invalidInput = true;
        }
        
      });
  }

}
