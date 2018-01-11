import { Component, OnInit } from '@angular/core';
import { Message, MenuItem } from 'primeng/primeng';
import { Car } from '../../../../common/api';
import { CarService } from '../../../../../services/car.service';

@Component({
  selector: 'prime-data-table-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class DataTableContextMenuComponent implements OnInit {
  msgs: Message[];
  cars: Car[];
  selectedCar: Car;
  items: MenuItem[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewCar(this.selectedCar) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.selectedCar) }
    ];
  }

  viewCar(car: Car) {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand });
  }

  deleteCar(car: Car) {
    let index = -1;
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].vin === car.vin) {
        index = i;
        break;
      }
    }
    this.cars.splice(index, 1);

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand });
  }
}
