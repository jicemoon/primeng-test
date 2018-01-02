import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prime-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  val1: number;
  val2: number;
  val3: number;
  val4 = 100;
  val5 = 0;

  constructor() { }

  ngOnInit() {
  }

}
