import { Component, OnInit } from '@angular/core';
import { Car } from '../../../common/api';
import { CarService } from '../../../../services/car.service';

@Component({
  selector: 'prime-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss']
})
export class PickListComponent implements OnInit {
  sourceCars: Car[];
  targetCars: Car[];
  
  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.sourceCars = cars);
      this.targetCars = [];
  }
}
