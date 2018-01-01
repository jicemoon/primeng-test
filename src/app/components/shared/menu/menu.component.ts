import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import { menuItems } from '../../../app-routing.module';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'prime-menu',
  templateUrl: './menu.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.menuItems = menuItems;
  }

}
