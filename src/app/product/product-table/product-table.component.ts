import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProductApi, IMock, IMockSum } from '../product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent implements OnInit {
  products: IProductApi[] = [];
  mocks: IMock[] = [];
  constructor(private service: ProductService) {}
  ngOnInit(): void {
    this.service.getDummy().subscribe((response) => (this.products = response));
    this.service.getMock().subscribe((response) => {
      this.mocks = response;
      // console.log(response);
      // console.log(this.mocks[0].data);
    });
  }
}
