import { Route } from '@angular/router';
import { MenuItem, SelectButton } from 'primeng/primeng';

import { BtnComponent } from './../components/pages/button/btn/btn.component';
import { SplitBtnComponent } from './../components/pages/button/split-btn/split-btn.component';

export const components = [
  BtnComponent,
  SplitBtnComponent
];

export const routeConfig: Route = {
  path: 'button',
  children: [
    {
      path: '',
      redirectTo: 'btn',
      pathMatch: 'prefix'
    },
    {
      path: 'btn',
      component: BtnComponent
    },
    {
      path: 'splitBtn',
      component: SplitBtnComponent
    }
  ]
};

export const menuItem: MenuItem = {
  label: '按钮',
  icon: 'fa-bus',
  items: [
    {
      label: 'Button',
      routerLink: '/button/btn'
    },
    {
      label: 'Split Button',
      routerLink: '/button/splitBtn'
    }
  ]
};
