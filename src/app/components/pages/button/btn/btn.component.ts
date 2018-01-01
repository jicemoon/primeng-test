import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prime-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  clicks = 0;
  constructor() { }

  ngOnInit() {
  }
  count() {
    this.clicks++;
  }
}
