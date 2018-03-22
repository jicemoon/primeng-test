import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../../services/car.service';
import { Car } from '../../../../common/api';

@Component({
  selector: 'prime-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class TableBasicComponent implements OnInit {
  cars: Car[];
  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars = cars);
      this.cols = [
          { field: 'vin', header: 'Vin' },
          {field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];
  }
}
