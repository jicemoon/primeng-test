import { Component, OnInit } from '@angular/core';
import { DataTableBaseComponent } from '../base.component';
import { CarService } from '../../../../../services/car.service';
import { Car } from '../../../../common/api';

@Component({
  selector: 'prime-data-table-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class DataTablePaginatorComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsMedium().then(cars => this.cars = cars);
  }
}
