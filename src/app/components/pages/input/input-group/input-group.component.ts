import { Component, OnInit } from '@angular/core';
import { randomWord } from '../../../../utils/publicFunctions';
@Component({
  selector: 'prime-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  randomWords ( num: Number = 0) {
    return randomWord(num);
  }
}
