import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Category } from '../../model/category';
import { MatTable, MatDialog, MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { AdminEditProductCategoryModalComponent } from '../admin-edit-product-category-modal/admin-edit-product-category-modal.component';
import { AdminDeleteProductCategoryModalComponent } from '../admin-delete-product-category-modal/admin-delete-product-category-modal.component';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-admin-new-product-category',
  templateUrl: './admin-new-product-category.component.html',
  styleUrls: ['./admin-new-product-category.component.scss']
})
export class AdminNewProductCategoryComponent implements OnInit, AfterViewInit {

  invalidCategory = false;
  saved = false;
  dataSource = new MatTableDataSource<Category>();
  displayedColumns = ['index', 'name', 'description', 'manage'];
  title="Add Product Category";
  name;
  description;
  id;

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(){
    this.productsService.getProductCategories()
    .pipe(
      finalize(() => {
        this.sortData();
      })
    )
    .subscribe((response: any) => {
      this.dataSource.data = response;
    })
  }  

  sortData(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(){
    
  }

  onSubmit(category: HTMLInputElement){ 
    this.productsService.createProductCategory(category)
      .subscribe((response:any) => {
        if(response && response._id){  
          let oldData:any;         
          oldData = this.dataSource.data;
          oldData.splice(0, 0, response);   
          this.dataSource.data = oldData;
          this.table.renderRows();
        }
        else{
          this.invalidCategory = true;
        }
      });
  }

  deleteCategory(input: Category){
    this.dialog.open(AdminDeleteProductCategoryModalComponent);
    if(true){
      this.productsService.deleteProductCategory(input)
        .subscribe((response: any) => {
          if(response && response._id){
            let oldData:any;
            oldData = this.dataSource.data;
            let index = oldData.indexOf(input);          
            oldData.splice(index, 1);          
            this.dataSource.data = oldData;
            this.table.renderRows();

          }
          if(response === 404){
            this.invalidCategory = true;
          }
        }) 
    } 
    else{
      return;
    }  
  }

  editCategory(category):any{
    this.dialog.open(AdminEditProductCategoryModalComponent, {data: category});
  }

  removeCategory(category):any{
    


  }

  filter(input: any){
    this.dataSource.filter = input.trim().toLowerCase();
  }
}

  

