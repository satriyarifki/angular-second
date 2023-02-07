import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProductApi } from './product';
import { Chart, registerables } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { ProductChartComponent } from './product-chart/product-chart.component';
Chart.register(...registerables);

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, AfterViewInit {
  @ViewChild(ProductChartComponent)
  chart!: ProductChartComponent;
  constructor(private detect: ChangeDetectorRef) {}
  monthNames: any;
  selected: any;
  ngAfterViewInit(): void {
    // console.log(this.chart);
    
    this.monthNames = this.chart.mockMonthLabel;
  }
  ngOnInit() {
    console.log(this.chart);
    
  }
  // selectmonth(selectMonth) {
  //   this.selected = selectMonth;
  // }
}
