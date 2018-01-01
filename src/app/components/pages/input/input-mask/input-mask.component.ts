import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prime-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.scss']
})
export class InputMaskComponent implements OnInit {
  val1: string;
  val2: string;
  val3: string;
  val4: string;
  val5: string;
  val6: string;

  constructor() { }

  ngOnInit() {
  }
}
