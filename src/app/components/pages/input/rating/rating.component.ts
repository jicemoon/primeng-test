import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prime-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  val1: number;
  val2 = 5;
  val3: number;
  val4 = 5;
  val5: number;
  msg: string;

  constructor() { }

  handleRate(event) {
    this.msg = 'You have rated ' + event.value;
  }

  handleCancel(event) {
    this.msg = 'Rating Cancelled';
  }

  ngOnInit() {
  }

}
