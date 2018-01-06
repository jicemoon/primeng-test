import { Component, OnInit } from '@angular/core';
import { Car } from '../../../../common/api';
import { Message } from '../../../../common/message';
import { CarService } from '../../../../../services/car.service';

@Component({
  selector: 'prime-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class DataTableSelectionComponent implements OnInit {
  msgs: Message[];
  cars: Car[];
  selectedCar1: Car;
  selectedCar2: Car;
  selectedCar3: Car;
  selectedCars1: Car[];
  selectedCars2: Car[];
  selectedCars3: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }

  onRowSelect(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: event.data.vin + ' - ' + event.data.brand });
  }

  onRowUnselect(event) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Car Unselected', detail: event.data.vin + ' - ' + event.data.brand });
  }
}
