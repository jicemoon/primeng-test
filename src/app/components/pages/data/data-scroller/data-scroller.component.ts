import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../services/car.service';
import { Car } from '../../../common/api';

@Component({
  selector: 'prime-data-scroller',
  templateUrl: './data-scroller.component.html',
  styleUrls: ['./data-scroller.component.scss']
})
export class DataScrollerComponent implements OnInit {
  cars: Car[];
  selectedCar: Car;
  scrollHeight: string;
  displayDialog: boolean;

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsMedium().then(cars => this.cars = cars);
      this.scrollHeight = Math.floor(200 + Math.random() * 200) + 'px';
  }

  selectCar(car: Car) {
      this.selectedCar = car;
      this.displayDialog = true;
  }

  onDialogHide() {
      this.selectedCar = null;
  }
}
