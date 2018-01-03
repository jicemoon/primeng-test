import { Route } from '@angular/router';
import { MenuItem, SelectButton } from 'primeng/primeng';

import { CarouselComponent } from './../components/pages/data/carousel/carousel.component';
import { DataGridComponent } from './../components/pages/data/data-grid/data-grid.component';
import { DataListComponent } from './../components/pages/data/data-list/data-list.component';
import { DataScrollerComponent } from './../components/pages/data/data-scroller/data-scroller.component';

export const components = [
  CarouselComponent,
  DataGridComponent,
  DataListComponent,
  DataScrollerComponent
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
    },
    {
      path: 'dataList',
      component: DataListComponent
    },
    {
      path: 'dataScroller',
      component: DataScrollerComponent
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
    },
    {
      label: 'DataList',
      routerLink: '/data/dataList'
    },
    {
      label: 'DataScroller',
      routerLink: '/data/dataScroller'
    }
  ]
};
