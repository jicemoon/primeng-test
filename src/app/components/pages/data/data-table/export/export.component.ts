import { Component, OnInit } from '@angular/core';
import { Car } from '../../../../common/api';
import { CarService } from '../../../../../services/car.service';

@Component({
  selector: 'data-table-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class DataTableExportComponent implements OnInit {
  cars: Car[];
  selectedCars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars = cars);
  }
}
