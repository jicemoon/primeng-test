import { Component, OnInit } from '@angular/core';
import { Car } from '../../../common/api';
import { CarService } from '../../../../services/car.service';

@Component({
  selector: 'prime-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  pageSizes = [4, 8, 10, 20, 50, 100];
  rows = 4;
  paginatorPosition = 'top';
  cars: Car[];
  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsLarge().then(cars => this.cars = cars);
      this.paginatorPosition = ['top', 'bottom', 'both'][Math.floor(Math.random() * 3)];
  }
}
