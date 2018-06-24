import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-admin-delete-product-category-modal',
  templateUrl: './admin-delete-product-category-modal.component.html',
  styleUrls: ['./admin-delete-product-category-modal.component.scss']
})
export class AdminDeleteProductCategoryModalComponent implements OnInit {

  constructor(
    public matDialogRef: MatDialogRef<AdminDeleteProductCategoryModalComponent>
  ) { }

  ngOnInit() {
  }

  onDelete(){
    this.matDialogRef.close();
    return true;    
  }

  onCancel(){
    this.matDialogRef.close();
  }
}
