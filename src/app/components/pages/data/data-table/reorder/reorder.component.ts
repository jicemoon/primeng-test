import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../../services/car.service';
import { DataTableBaseComponent } from '../base.component';

@Component({
  selector: 'prime-data-table-reorder',
  templateUrl: './reorder.component.html',
  styleUrls: ['./reorder.component.scss']
})
export class DataTableReorderComponent extends DataTableBaseComponent {
  constructor(carService: CarService) {
    super(carService);
  }
}
