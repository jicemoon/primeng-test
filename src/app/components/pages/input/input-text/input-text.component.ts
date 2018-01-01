import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prime-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  text: string;
  disabled = true;

  constructor() { }


  toggleDisabled() {
      this.disabled = !this.disabled;
  }
  ngOnInit() {
  }

}
