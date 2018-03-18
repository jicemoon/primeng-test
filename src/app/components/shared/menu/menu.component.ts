import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import { menuItems } from '../../../routings/app-routing.module';
import { ViewEncapsulation } from '@angular/core';
import { sliderDownUp } from '../../../animations';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Location } from '@angular/common';

@Component({
  selector: 'prime-menu',
  templateUrl: './menu.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./menu.component.scss'],
  animations: [
    sliderDownUp
  ]
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];
  currentIndex: number = -1;
  threeMenuItems = [];
  constructor(private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.menuItems = menuItems;
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.location.path())
      .subscribe(path => {
        this.resetActive(path, this.menuItems);
      });
  }
  resetActive(path: string, menuItemList) {
    if(!menuItemList) return;
    menuItemList.some((menu, idx) => {
      let bool = false;
      if(menu.items) {
        (menu.items as Array<MenuItem>).some((subMenu) => {
          if(subMenu.items) {
            (subMenu.items as Array<MenuItem>).some((threeMenu) => {
              bool = (threeMenu.routerLink as string).toLocaleLowerCase() === path.toLocaleLowerCase();
              return bool;
            });
          } else {
            bool = (subMenu.routerLink as string).toLocaleLowerCase() === path.toLocaleLowerCase()
          }
          if(bool) {
            //this.sliderSubMenu(idx);
            //this.threeMenuHandle(subMenu);
            this.currentIndex = idx;
            this.threeMenuItems = subMenu.items || [];
          }
          return bool;
        })
      }
      return bool;
    });
  }
  sliderSubMenu(idx: number) {
    this.currentIndex = this.currentIndex === idx ? -1: idx;
  }
  threeMenuHandle(subMenu: MenuItem) {
    this.threeMenuItems = subMenu.items || [];
  }
}
