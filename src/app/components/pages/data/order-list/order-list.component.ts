import { Component, OnInit } from '@angular/core';
import { Car } from '../../../common/api';
import { CarService } from '../../../../services/car.service';

@Component({
  selector: 'prime-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  cars: Car[];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }
}
