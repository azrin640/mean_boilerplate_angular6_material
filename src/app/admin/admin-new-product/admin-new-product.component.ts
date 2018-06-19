import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-new-product',
  templateUrl: './admin-new-product.component.html',
  styleUrls: ['./admin-new-product.component.scss']
})
export class AdminNewProductComponent implements OnInit {

  categories=[];

  constructor() { }

  ngOnInit() {
  }

}
