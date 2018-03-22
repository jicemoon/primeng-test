import { Route } from '@angular/router';
import { MenuItem, SelectButton } from 'primeng/primeng';

import { TableBasicComponent } from './../components/pages/data/table/basic/basic.component';

export const components = [
  TableBasicComponent,
];

export const routeConfig: Route = {
  path: 'table',
  children: [
    {
      path: '',
      redirectTo: 'basic',
      pathMatch: 'prefix'
    },
    {
      path: 'basic',
      component: TableBasicComponent
    },
  ]
};

export const menuItem: MenuItem = {
  label: 'Table',
  routerLink: '/data/table',
  items: [
    {
      label: 'Basic',
      routerLink: '/data/table/basic'
    },
  ]
};

