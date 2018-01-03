import { Route } from '@angular/router';
import { MenuItem, SelectButton } from 'primeng/primeng';

import { CarouselComponent } from './../components/pages/data/carousel/carousel.component';

export const components = [
  CarouselComponent
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
    }
  ]
};

