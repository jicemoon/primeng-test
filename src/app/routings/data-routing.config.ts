import { Route } from '@angular/router';
import { MenuItem, SelectButton } from 'primeng/primeng';

import { CarouselComponent } from './../components/pages/data/carousel/carousel.component';
import { DataGridComponent } from './../components/pages/data/data-grid/data-grid.component';
import { DataListComponent } from './../components/pages/data/data-list/data-list.component';
import { DataViewComponent } from './../components/pages/data/data-view/data-view.component';
import { DataScrollerComponent } from './../components/pages/data/data-scroller/data-scroller.component';
import * as dataTableConfig from './data-table-routing.config';
import { OrganizationChartComponent } from '../components/pages/data/organization-chart/organization-chart.component';
import { OrderListComponent } from '../components/pages/data/order-list/order-list.component';



export const components = [
  CarouselComponent,
  DataGridComponent,
  DataListComponent,
  DataViewComponent,
  DataScrollerComponent,
  ...dataTableConfig.components,
  OrganizationChartComponent,
  OrderListComponent
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
      path: 'dataView',
      component: DataViewComponent
    },
    {
      path: 'dataScroller',
      component: DataScrollerComponent
    },
    dataTableConfig.routeConfig,
    {
      path: 'organizationChart',
      component: OrganizationChartComponent
    },
    {
      path: 'orderList',
      component: OrderListComponent
    },
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
      label: 'DataView',
      routerLink: '/data/dataView'
    },
    {
      label: 'DataScroller',
      routerLink: '/data/dataScroller'
    },
    dataTableConfig.menuItem,
    {
      label: 'Org Chart',
      routerLink: '/data/organizationChart'
    },
    {
      label: 'OrderList',
      routerLink: '/data/orderList'
    },
  ]
};

