import { Component, OnInit } from '@angular/core';
import { Car } from '../../../common/api';
import { CarService } from '../../../../services/car.service';

@Component({
  selector: 'prime-data-table',
  template: `<div></div>`
})
export class DataTableBaseComponent implements OnInit {
  loading: boolean;

  cars: Car[];

  cols: any[];

  constructor(public carService: CarService) { }

  ngOnInit() {
      this.loading = true;
      setTimeout(() => {
          this.carService.getCarsSmall().then(cars => this.cars = cars);
          this.loading = false;
      }, 1000);

      this.cols = [
          {field: 'vin', header: 'Vin'},
          {field: 'year', header: 'Year'},
          {field: 'brand', header: 'Brand'},
          {field: 'color', header: 'Color'}
      ];
  }
}
