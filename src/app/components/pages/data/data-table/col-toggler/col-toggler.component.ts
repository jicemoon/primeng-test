import { Component, OnInit } from '@angular/core';
import { Car, SelectItem } from '../../../../common/api';
import { CarService } from '../../../../../services/car.service';

@Component({
  selector: 'data-table-col-toggler',
  templateUrl: './col-toggler.component.html',
  styleUrls: ['./col-toggler.component.scss']
})
export class DataTableColTogglerComponent implements OnInit {
  cars: Car[];
  cols: any[];
  columnOptions: SelectItem[];

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars = cars);

      this.cols = [
          {field: 'vin', header: 'Vin'},
          {field: 'year', header: 'Year'},
          {field: 'brand', header: 'Brand'},
          {field: 'color', header: 'Color'}
      ];

      this.columnOptions = [];
      for(let i = 0; i < this.cols.length; i++) {
          this.columnOptions.push({label: this.cols[i].header, value: this.cols[i]});
      }
  }
}
