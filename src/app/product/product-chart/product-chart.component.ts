import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProductApi, IMockSum, IMock } from '../product';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-product-chart',
  templateUrl: './product-chart.component.html',
  styleUrls: ['./product-chart.component.css'],
})
export class ProductChartComponent implements OnInit, OnChanges {
  @Input() selected: String = '';
  // products: IProductApi[] = [];
  // productName: String[] = [];
  // productColor: String[] = [];
  // productprocessor: String[] = [];
  // productPrice: Number[] = [];
  // constructor(private pservice: ProductService) {}
  // ngOnInit(): void {
  //   this.pservice.getDummy().subscribe((response: any) => {
  //     this.products = response;
  //     for (let row of this.products) {
  //       this.productName.push(row.name);
  //       this.productColor.push(row.color);
  //       this.productprocessor.push(row.processor);
  //       this.productPrice.push(row.price);
  //     }
  //     console.log(this.products[0].name);
  //     new Chart('chartPrice', {
  //       type: 'line',
  //       data: {
  //         labels: this.productName,
  //         datasets: [
  //           {
  //             label: 'Price',
  //             data: this.productPrice,
  //             borderWidth: 1,
  //             backgroundColor: '#0d0863',
  //           },
  //         ],
  //       },
  //       options: {
  //         scales: {
  //           y: {
  //             min: 1000,
  //             max: 20000,
  //           },
  //         },
  //       },
  //     });
  //   });
  // }
  contoh = 'ss';
  mock: IMock[] = [];
  mockSum: IMockSum[] = [];
  mockYear: String[] = [];
  mockMonth: String[] = [];
  mockMonthLabel: String[] = [];
  mockEsSum: Number[] = [];
  myChart: any;
  ylabel = '';
  constructor(private pservice: ProductService) {}

  ngOnInit(): void {
    this.pservice.getMock().subscribe((respon: any) => {
      this.mock = respon;
    });
    this.pservice.getMockSum().subscribe((response: any) => {
      this.mockSum = response;
      for (let row of this.mockSum) {
        this.mockYear.push(row.year);
        this.mockMonth.push(row.month);
        this.mockMonthLabel.push(row.month);
        this.mockEsSum.push(row.sum_estoque);
      }
      this.chart();
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.contoh);

    for (let i = 0; i <= this.mockMonthLabel.length; i++) {
      if (this.selected == this.mockMonthLabel[i]) {
        this.mockMonth.length = 0;
        this.mockEsSum.length = 0;
        this.ylabel = 'Estoque';
        for (let row of this.mock) {
          if (new Date(row.data).getMonth() == i) {
            this.mockMonth.push(row.data.toString());
            this.mockEsSum.push(row.estoque);
          }
        }
        this.myChart.update();
        break;
      }
      this.ylabel = 'Average Estoque';
    }
    if (this.selected == 'all') {
      this.mockMonth.length = 0;
      this.mockEsSum.length = 0;
      this.ylabel = 'Average Estoque';
      for (let row of this.mockSum) {
        this.mockMonth.push(row.month);
        this.mockEsSum.push(row.sum_estoque);
      }
      console.log(this.ylabel);

      this.myChart.update();
    }
  }
  chart() {
    this.myChart = new Chart('chartPrice', {
      type: 'bar',
      data: {
        labels: this.mockMonth,
        datasets: [
          {
            label: this.ylabel,
            data: this.mockEsSum,
            borderWidth: 1,
            // barThickness: 'flex',
            backgroundColor: '#0d0863',
            // tension: 0.2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            min: 200,
            max: 8000,
          },
        },
      },
    });
  }
}
