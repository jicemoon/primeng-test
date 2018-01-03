import { Component, OnInit } from '@angular/core';
import { Car } from '../../../../common/api';
import { CarService } from '../../../../../services/car.service';
import { DataTableBaseComponent } from '../base.component';

@Component({
  selector: 'prime-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent extends DataTableBaseComponent {
  constructor(carService: CarService) {
    super(carService);
   }
}
