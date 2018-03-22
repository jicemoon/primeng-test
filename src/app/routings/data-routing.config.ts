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
import { GmapComponent } from '../components/pages/data/gmap/gmap.component';
import { PaginatorComponent } from '../components/pages/data/paginator/paginator.component';
import { PickListComponent } from '../components/pages/data/pick-list/pick-list.component';
import { ScheduleComponent } from '../components/pages/data/schedule/schedule.component';
import * as tableConfig from './table-routing.config';
import { TreeComponent } from '../components/pages/data/tree/tree.component';
import { TreeTableComponent } from '../components/pages/data/tree-table/tree-table.component';


export const components = [
  CarouselComponent,
  DataGridComponent,
  DataListComponent,
  DataViewComponent,
  DataScrollerComponent,
  ...dataTableConfig.components,
  OrganizationChartComponent,
  OrderListComponent,
  GmapComponent,
  PaginatorComponent,
  PickListComponent,
  ScheduleComponent,
  ...tableConfig.components,
  TreeComponent,
  TreeTableComponent,
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
    {
      path: 'gMap',
      component: GmapComponent
    },
    {
      path: 'paginator',
      component: PaginatorComponent
    },
    {
      path: 'pickList',
      component: PickListComponent
    },
    {
      path: 'schedule',
      component: ScheduleComponent
    },
    tableConfig.routeConfig,
    {
      path: 'tree',
      component: TreeComponent
    },
    {
      path: 'treeTable',
      component: TreeTableComponent
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
    {
      label: 'GMap',
      routerLink: '/data/gMap'
    },
    {
      label: 'Paginator',
      routerLink: '/data/paginator'
    },
    {
      label: 'PickList',
      routerLink: '/data/pickList'
    },
    {
      label: 'Schedule',
      routerLink: '/data/schedule'
    },
    tableConfig.menuItem,
    {
      label: 'Tree',
      routerLink: '/data/tree'
    },
    {
      label: 'TreeTable',
      routerLink: '/data/treeTable'
    },
  ]
};

