import { Component, OnInit } from '@angular/core';
import { SelectItem } from '../../../common/api';

@Component({
  selector: 'prime-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {
  types: SelectItem[];
  selectedType: string;
  selectedTypes: string[] = ['Apartment', 'Studio'];

  constructor() {
    this.types = [];
    this.types.push({ label: 'Apartment', value: 'Apartment' });
    this.types.push({ label: 'House', value: 'House' });
    this.types.push({ label: 'Studio', value: 'Studio' });
  }

  clear() {
    this.selectedType = null;
    this.selectedTypes = [];
  }

  ngOnInit() {
  }

}
