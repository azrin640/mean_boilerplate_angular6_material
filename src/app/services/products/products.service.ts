import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private category: Category;

  constructor(
    private http: HttpClient
  ) { }

  createProductCategory(category){
    return this.http.post('/api/product/category', category);
  }

  getProductCategories(){
    return this.http.get('/api/products/categories');
  }

  editProductCategory(category: any){
    return this.http.post('/api/product/category/update', category);
  }

  deleteProductCategory(category){    
    return this.http.post('/api/product/category/delete', category);
  }

  createProduct(product){
    return this.http.post('/api/product/new', product);
  }

  getProducts(){
    return this.http.get('/api/products');
  }
}
