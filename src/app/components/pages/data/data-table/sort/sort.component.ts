import { Component, OnInit } from '@angular/core';
import { Car } from '../../../../common/api';
import { CarService } from '../../../../../services/car.service';

@Component({
  selector: 'prime-data-table-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class DataTableSortComponent implements OnInit {
  cars1: Car[];
  cars2: Car[];
  sortF = 'year';

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars1 = cars);
      this.carService.getCarsSmall().then(cars => this.cars2 = cars);
  }

  changeSort(event) {
      if (!event.order) {
        this.sortF = 'year';
      } else {
        this.sortF = event.field;
      }
  }
}
