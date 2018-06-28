import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-admin-delete-product-category-modal',
  templateUrl: './admin-delete-product-category-modal.component.html',
  styleUrls: ['./admin-delete-product-category-modal.component.scss']
})
export class AdminDeleteProductCategoryModalComponent implements OnInit {

  invalidRequest= false;

  constructor(
    public matDialogRef: MatDialogRef<AdminDeleteProductCategoryModalComponent>,
    private productService : ProductsService
  ) { }

  ngOnInit() {
  }

  onDelete(category: any){
    this.matDialogRef.close({data: true});   
  }

  onCancel(){
    this.matDialogRef.close({data: false});
  }
}
