import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prime-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  checked1 = false;
  checked2 = true;

  constructor() { }

  ngOnInit() {
  }

}
