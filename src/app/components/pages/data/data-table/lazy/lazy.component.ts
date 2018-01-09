import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/primeng';
import { CarService } from '../../../../../services/car.service';
import { Car } from '../../../../common/api';

@Component({
  selector: 'prime-data-table-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class DataTableLazyComponent implements OnInit {
  datasource: Car[];
  cars: Car[];
  totalRecords: number;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsLarge().then(cars => {
      this.datasource = cars;
      this.totalRecords = this.datasource.length;
      this.cars = this.datasource.slice(0, 10);
    });
  }
  loadCarsLazy(event: LazyLoadEvent) {
    setTimeout(() => {
      if (this.datasource) {
        this.cars = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

}
