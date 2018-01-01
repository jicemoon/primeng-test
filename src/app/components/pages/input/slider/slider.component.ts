import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prime-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  val1: number;
  val2 = 50;
  val3: number;
  val4: number;
  val5: number;
  val6: number;
  rangeValues: number[] = [20, 80];

  constructor() { }

  ngOnInit() {
  }

}
