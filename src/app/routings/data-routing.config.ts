import { Route } from '@angular/router';
import { MenuItem, SelectButton } from 'primeng/primeng';

import { CarouselComponent } from './../components/pages/data/carousel/carousel.component';
import { DataGridComponent } from './../components/pages/data/data-grid/data-grid.component';

export const components = [
  CarouselComponent,
  DataGridComponent
];

export const routeConfig: Route = {
  path: 'data',
  children: [
    {
      path: '',
      redirectTo: 'carousel',
      pathMatch: 'prefix'
    },
    {
      path: 'carousel',
      component: CarouselComponent
    },
    {
      path: 'dataGrid',
      component: DataGridComponent
    }
  ]
};

export const menuItem: MenuItem = {
  label: '数据显示',
  icon: 'fa-bus',
  items: [
    {
      label: 'Carousel',
      routerLink: '/data/carousel'
    },
    {
      label: 'DataGrid',
      routerLink: '/data/dataGrid'
    }
  ]
};

