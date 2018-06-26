import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../model/product';
import { MatTable, MatTableDataSource, MatDialog } from '@angular/material';
import { finalize } from 'rxjs/operators';
import { AdminEditProductComponent } from '../admin-edit-product/admin-edit-product.component';

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
  displayedColumns = ['index', 'category', 'code', 'title', 'price', 'manage'];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.productsService.getProductCategories()
      .pipe(
        finalize(()=> {
          this.getProducts();
        })
      )
      .subscribe((response:any) => {
        this.categories = response;
      });
  }

  getProducts(){
    this.productsService.getProducts()
      .subscribe((res:any) => {
        console.log(res);
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
    let dialogRef = this.dialog.open(AdminEditProductComponent, {data: product});
    let oldData:any = [];
    oldData = this.dataSource.data;
    let index = oldData.indexOf(product);
    
    dialogRef.afterClosed()
      .subscribe((response:any) => {
        oldData.splice(index, 1, response);
        this.dataSource.data = oldData;
      })
    

  }

}
