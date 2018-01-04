import { Component, OnInit } from '@angular/core';
import { Car } from '../../../../common/api';
import { CarService } from '../../../../../services/car.service';

@Component({
  selector: 'prime-data-table-row-group',
  templateUrl: './row-group.component.html',
  styleUrls: ['./row-group.component.scss']
})
export class DataTableRowGroupComponent implements OnInit {
  cars1: Car[];
  cars2: Car[];
  cars3: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsMedium().then(cars => {
      this.cars1 = cars;
      this.cars2 = JSON.parse(JSON.stringify(cars));
      this.cars3 = JSON.parse(JSON.stringify(cars));
    });
  }

  calculateGroupTotal(brand: string) {
    let total = 0;

    if (this.cars1) {
      for (const car of this.cars1) {
        if (car.brand === brand) {
          total += car.price;
        }
      }
    }
    return total;
  }
}
