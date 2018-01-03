import { Route } from '@angular/router';
import { MenuItem, SelectButton } from 'primeng/primeng';

import { CarouselComponent } from './../components/pages/data/carousel/carousel.component';
import { DataGridComponent } from './../components/pages/data/data-grid/data-grid.component';
import { DataListComponent } from './../components/pages/data/data-list/data-list.component';
import { DataScrollerComponent } from './../components/pages/data/data-scroller/data-scroller.component';
import { DataTableComponent } from './../components/pages/data/data-table/basic/data-table.component';
import { FacetsComponent } from './../components/pages/data/data-table/facets/facets.component';
import { TemplatingComponent } from './../components/pages/data/data-table/templating/templating.component';
import { ColGroupComponent } from './../components/pages/data/data-table/col-group/col-group.component';


export const components = [
  CarouselComponent,
  DataGridComponent,
  DataListComponent,
  DataScrollerComponent,
  DataTableComponent,
  FacetsComponent,
  TemplatingComponent,
  ColGroupComponent
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
    },
    {
      path: 'dataTable',
      children: [
        {
          path: '',
          redirectTo: 'basic',
          pathMatch: 'prefix'
        },
        {
          path: 'basic',
          component: DataTableComponent
        },
        {
          path: 'facets',
          component: FacetsComponent
        },
        {
          path: 'templating',
          component: TemplatingComponent
        },
        {
          path: 'colGroup',
          component: ColGroupComponent
        }
      ]
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
    },
    {
      label: 'DataTable',
      routerLink: '/data/dataTable',
      items: [
        {
          label: 'Basic',
          routerLink: '/data/dataTable/basic'
        },
        {
          label: 'Facets',
          routerLink: '/data/dataTable/facets'
        },
        {
          label: 'Templating',
          routerLink: '/data/dataTable/templating'
        },
        {
          label: 'ColGroup',
          routerLink: '/data/dataTable/colGroup'
        }
      ]
    }
  ]
};

