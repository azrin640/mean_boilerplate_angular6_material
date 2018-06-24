import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-admin-edit-product-category-modal',
  templateUrl: './admin-edit-product-category-modal.component.html',
  styleUrls: ['./admin-edit-product-category-modal.component.scss']
})
export class AdminEditProductCategoryModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private category: any,
    private productsService: ProductsService,
    public matDialogRef: MatDialogRef<AdminEditProductCategoryModalComponent>
  ) { }

  title="Edit Category";

  ngOnInit() {
  }

  onSubmit(category: any){
    console.log(category)
    this.productsService.editProductCategory(category)
      .subscribe(response => {
        if(response){
          this.matDialogRef.close();
        }        
      })

  }

}
