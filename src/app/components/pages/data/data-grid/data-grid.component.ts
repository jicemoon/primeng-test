import { Component, OnInit } from '@angular/core';
import { Car } from '../../../common/api';
import { CarService } from '../../../../services/car.service';

@Component({
  selector: 'prime-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  cars: Car[];
  selectedCar: Car;
  displayDialog: boolean;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsLarge().then(cars => this.cars = cars);
  }

  selectCar(car: Car) {
    this.selectedCar = car;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedCar = null;
  }
}
