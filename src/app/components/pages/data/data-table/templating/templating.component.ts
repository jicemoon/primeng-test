import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../../services/car.service';
import { DataTableBaseComponent } from '../base.component';
import { Message } from 'primeng/primeng';
import { Car } from '../../../../common/api';

@Component({
  selector: 'prime-templating',
  templateUrl: './templating.component.html',
  styleUrls: ['./templating.component.scss']
})
export class TemplatingComponent extends DataTableBaseComponent {
  msgs: Message[] = [];
  constructor(carService: CarService) {
    super(carService);
  }
  selectCar(car: Car) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Car Select', detail: 'Vin: ' + car.vin });
  }
}
