import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prime-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss']
})
export class InputSwitchComponent implements OnInit {
  checked1 = false;
  checked2 = true;
  checked3 = false;

  constructor() { }

  ngOnInit() {
  }

}
