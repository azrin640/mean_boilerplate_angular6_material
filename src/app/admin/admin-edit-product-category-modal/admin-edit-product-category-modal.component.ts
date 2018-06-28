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
  invalidCategory=false;
  notFound=false;

  ngOnInit() {
  }

  onSubmit(category: any){
    this.productsService.editProductCategory(category)
      .subscribe((response: any) => {
        if(response && response._id){
          this.matDialogRef.close(response);
        }
        if(response){
          console.log(response);
        }     
      });

  }

}
