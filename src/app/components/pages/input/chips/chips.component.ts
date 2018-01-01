import { Component, OnInit } from '@angular/core';
import { randomWords } from '../../../../utils/publicFunctions';

@Component({
  selector: 'prime-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  values1: string[] = ['a', 'b', 'c'];
  values2: string[] = [];

  constructor() { }

  ngOnInit() {
    this.values2 = randomWords(10, [4, 10]);
  }
}
