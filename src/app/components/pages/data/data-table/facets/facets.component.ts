import { Component, OnInit } from '@angular/core';
import { DataTableBaseComponent } from '../base.component';
import { CarService } from '../../../../../services/car.service';

@Component({
  selector: 'prime-data-table-facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.scss']
})
export class DataTableFacetsComponent extends DataTableBaseComponent {
  constructor(carService: CarService) {
    super(carService);
  }
}
