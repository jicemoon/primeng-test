import { Component, OnInit } from '@angular/core';
import { Car } from '../../../../common/api';
import { CarService } from '../../../../../services/car.service';

@Component({
  selector: 'data-table-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.scss']
})
export class DataTableResponsiveComponent implements OnInit {
  cars: Car[];
  stacked: boolean;

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsMedium().then(cars => this.cars = cars);
  }  
  toggle() {
      this.stacked = !this.stacked;
  }
}
