import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../../../services/car.service';
import { DataTableBaseComponent } from '../base.component';

@Component({
  selector: 'prime-data-table-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss']
})
export class DataTableEditableComponent extends DataTableBaseComponent implements OnInit {
  brands: { label: string, value: string}[];
  constructor(carService: CarService) {
    super(carService);
  }
  ngOnInit() {
    super.ngOnInit();
    this.brands = [
      {label: '请选择', value: null},
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}
  ];
  }
}
