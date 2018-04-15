import { Route } from '@angular/router';
import { MenuItem, SelectButton } from 'primeng/primeng';

import { DataTableBaseComponent } from '../components/pages/data/data-table/base.component';
import { DataTableBasicComponent } from './../components/pages/data/data-table/basic/data-table.component';
import { DataTableFacetsComponent } from './../components/pages/data/data-table/facets/facets.component';
import { DataTableTemplatingComponent } from './../components/pages/data/data-table/templating/templating.component';
import { DataTableColGroupComponent } from './../components/pages/data/data-table/col-group/col-group.component';
import { DataTableRowGroupComponent } from './../components/pages/data/data-table/row-group/row-group.component';
import { DataTablePaginatorComponent } from './../components/pages/data/data-table/paginator/paginator.component';
import { DataTableSortComponent } from './../components/pages/data/data-table/sort/sort.component';
import { DataTableFilterComponent } from './../components/pages/data/data-table/filter/filter.component';
import { DataTableSelectionComponent } from './../components/pages/data/data-table/selection/selection.component';
import { DataTableEditableComponent } from './../components/pages/data/data-table/editable/editable.component';
import { DataTableResizeComponent } from '../components/pages/data/data-table/resize/resize.component';
import { DataTableReorderComponent } from './../components/pages/data/data-table/reorder/reorder.component';
import { DataTableExpandComponent } from './../components/pages/data/data-table/expand/expand.component';
import { DataTableScrollComponent } from '../components/pages/data/data-table/scroll/scroll.component';
import { DataTableLazyComponent } from '../components/pages/data/data-table/lazy/lazy.component';
import { DataTableContextMenuComponent } from '../components/pages/data/data-table/context-menu/context-menu.component';
import { DataTableColTogglerComponent } from '../components/pages/data/data-table/col-toggler/col-toggler.component';
import { DataTableResponsiveComponent } from '../components/pages/data/data-table/responsive/responsive.component';
import { DataTableCrudComponent } from '../components/pages/data/data-table/crud/crud.component';
import { DataTableExportComponent } from '../components/pages/data/data-table/export/export.component';

export const components = [
  DataTableBaseComponent,
  DataTableBasicComponent,
  DataTableFacetsComponent,
  DataTableTemplatingComponent,
  DataTableColGroupComponent,
  DataTableRowGroupComponent,
  DataTablePaginatorComponent,
  DataTableSortComponent,
  DataTableFilterComponent,
  DataTableSelectionComponent,
  DataTableEditableComponent,
  DataTableExpandComponent,
  DataTableResizeComponent,
  DataTableReorderComponent,
  DataTableScrollComponent,
  DataTableLazyComponent,
  DataTableContextMenuComponent,
  DataTableColTogglerComponent,
  DataTableResponsiveComponent,
  DataTableCrudComponent,
  DataTableExportComponent
];

export const routeConfig: Route = {
  path: 'dataTable',
  children: [
    {
      path: '',
      redirectTo: 'basic',
      pathMatch: 'prefix'
    },
    {
      path: 'basic',
      component: DataTableBasicComponent
    },
    {
      path: 'facets',
      component: DataTableFacetsComponent
    },
    {
      path: 'templating',
      component: DataTableTemplatingComponent
    },
    {
      path: 'colGroup',
      component: DataTableColGroupComponent
    },
    {
      path: 'rowGroup',
      component: DataTableRowGroupComponent
    },
    {
      path: 'paginator',
      component: DataTablePaginatorComponent
    },
    {
      path: 'sort',
      component: DataTableSortComponent
    },
    {
      path: 'filter',
      component: DataTableFilterComponent
    },
    {
      path: 'selection',
      component: DataTableSelectionComponent
    },
    {
      path: 'editable',
      component: DataTableEditableComponent
    },
    {
      path: 'expand',
      component: DataTableExpandComponent
    },
    {
      path: 'resize',
      component: DataTableResizeComponent
    },
    {
      path: 'reorder',
      component: DataTableReorderComponent
    },
    {
      path: 'scroll',
      component: DataTableScrollComponent
    },
    {
      path: 'lazy',
      component: DataTableLazyComponent
    },
    {
      path: 'contextMenu',
      component: DataTableContextMenuComponent
    },
    {
      path: 'colToggler',
      component: DataTableColTogglerComponent
    },
    {
      path: 'responsive',
      component: DataTableResponsiveComponent
    },
    {
      path: 'crud',
      component: DataTableCrudComponent
    },
    {
      path: 'export',
      component: DataTableExportComponent
    }
  ]
};

export const menuItem: MenuItem = {
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
    },
    {
      label: 'RowGroup',
      routerLink: '/data/dataTable/rowGroup'
    },
    {
      label: 'Paginator',
      routerLink: '/data/dataTable/paginator'
    },
    {
      label: 'Sort',
      routerLink: '/data/dataTable/sort'
    },
    {
      label: 'Filter',
      routerLink: '/data/dataTable/filter'
    },
    {
      label: 'Selection',
      routerLink: '/data/dataTable/selection'
    },
    {
      label: 'Editable',
      routerLink: '/data/dataTable/editable'
    },
    {
      label: 'Expand',
      routerLink: '/data/dataTable/expand'
    },
    {
      label: 'Resize',
      routerLink: '/data/dataTable/resize'
    },
    {
      label: 'Reorder',
      routerLink: '/data/dataTable/reorder'
    },
    {
      label: 'Scroll',
      routerLink: '/data/dataTable/scroll'
    },
    {
      label: 'Lazy',
      routerLink: '/data/dataTable/lazy'
    },
    {
      label: 'ContextMenu',
      routerLink: '/data/dataTable/contextMenu'
    },
    {
      label: 'Column Toggler',
      routerLink: '/data/dataTable/colToggler'
    },
    {
      label: 'Responsive',
      routerLink: '/data/dataTable/responsive'
    },
    {
      label: 'CRUD[增/读/改/删]',
      routerLink: '/data/dataTable/crud'
    },
    {
      label: 'Export',
      routerLink: '/data/dataTable/export'
    }
  ]
};

