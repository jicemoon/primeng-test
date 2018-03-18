import { Component, OnInit } from '@angular/core';
import { Car } from '../../../../common/api';
import { CarService } from '../../../../../services/car.service';

@Component({
  selector: 'data-table-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class DataTableCrudComponent implements OnInit {
  displayDialog: boolean;

  car: Car = new PrimeCar();
  selectedCar: Car;
  newCar: boolean;
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new PrimeCar();
    this.displayDialog = true;
  }

  save() {
    let cars = [...this.cars];
    if (this.newCar)
      cars.push(this.car);
    else
      cars[this.findSelectedCarIndex()] = this.car;

    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.findSelectedCarIndex();
    this.cars = this.cars.filter((val, i) => i != index);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
    let car = new PrimeCar();
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

  findSelectedCarIndex(): number {
    return this.cars.indexOf(this.selectedCar);
  }
}

class PrimeCar implements Car {

  constructor(public vin?, public year?, public brand?, public color?) { }
}