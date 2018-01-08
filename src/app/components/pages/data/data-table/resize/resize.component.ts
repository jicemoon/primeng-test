import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../../services/car.service';
import { DataTableBaseComponent } from '../base.component';

@Component({
  selector: 'prime-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.scss']
})
export class DataTableResizeComponent extends DataTableBaseComponent {
  constructor(carService: CarService) {
    super(carService);
  }
}
