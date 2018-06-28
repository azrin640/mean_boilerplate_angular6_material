import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../model/product';
import { MatTable, MatTableDataSource, MatDialog, MatSnackBar, MatSort, MatPaginator } from '@angular/material';
import { finalize } from 'rxjs/operators';
import { AdminEditProductComponent } from '../admin-edit-product/admin-edit-product.component';
import { AdminDeleteProductComponent } from '../admin-delete-product/admin-delete-product.component';

@Component({
  selector: 'app-admin-new-product',
  templateUrl: './admin-new-product.component.html',
  styleUrls: ['./admin-new-product.component.scss']
})
export class AdminNewProductComponent implements OnInit {

  categories=[];
  title = 'Add a product';
  productDuplicate = false;
  productSaved = false;  
  dataSource = new MatTableDataSource<Product>();
  displayedColumns = ['index', 'category', 'code', 'title', 'price', 'description', 'manage'];
  flash;

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,
    public snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.productsService.getProductCategories()
      .pipe(
        finalize(()=> {
          this.getProducts();
          this.sortData();
        })
      )
      .subscribe((response:any) => {
        this.categories = response;
      });
  }

  sortData(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getProducts(){
    this.productsService.getProducts()
      .subscribe((res:any) => {
        this.dataSource.data = res;
      });
  }

  onSubmit(product: Product){
    this.productsService.createProduct(product)
      .subscribe((response: any) => {
        console.log(response);
        if(response.code === 1100){
          this.productDuplicate = true;
        }
        if(response._id){
          this.productSaved = true;
          let oldData:any = []
          oldData = this.dataSource.data;          
          oldData.splice(0, 0, response);
          this.dataSource.data = oldData;
        }
      })
  }

  editProduct(product){
    let editProductDialog = this.dialog.open(AdminEditProductComponent, {data: product});
  }

  deleteProduct(product: any){
    let oldData:any = [];
    oldData = this.dataSource.data;
    let index = oldData.indexOf(product);

    let dialogRef = this.dialog.open(AdminDeleteProductComponent, {data: product});

    dialogRef.afterClosed()
      .subscribe((response: any) => {
        if(response && response === true){
          this.productsService.deleteProduct(product)
            .subscribe((res:any) => {
              oldData.splice(index, 1);
              this.dataSource.data = oldData;
              this.table.renderRows();
            })
        }
      });
  }

  filter(input: any){
    this.dataSource.filter = input.trim().toLowerCase();
  }

}
