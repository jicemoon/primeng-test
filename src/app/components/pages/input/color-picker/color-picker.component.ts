import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prime-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  color1: string;
  color2 = '#1976D2';

  constructor() { }

  ngOnInit() {
  }
}
