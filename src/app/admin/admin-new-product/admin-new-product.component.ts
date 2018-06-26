import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../model/product';
import { MatTable, MatTableDataSource } from '@angular/material';

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
  displayedColumn = ['index', 'code'];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsService.getProductCategories()
      .subscribe((response:any) => {
        this.categories = response;
      });
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
          response.slice(0, 0, response);
          this.dataSource = response;
        }
      })
  }

}
