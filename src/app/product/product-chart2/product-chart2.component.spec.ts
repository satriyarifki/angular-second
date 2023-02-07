import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChart2Component } from './product-chart2.component';

describe('ProductChart2Component', () => {
  let component: ProductChart2Component;
  let fixture: ComponentFixture<ProductChart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductChart2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
