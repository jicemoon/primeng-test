import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuItem, SelectButton } from 'primeng/primeng';

import * as btnConfigs from './button-routing.config';
import * as inputConfigs from './input-routing.config';

export const routeComponents = [
  ...btnConfigs.components,
  ...inputConfigs.components
];
const routes: Routes = [{
  path: '',
  redirectTo: '/button/btn',
  pathMatch: 'full'
}, btnConfigs.routeConfig, inputConfigs.routeConfig];
export const menuItems: MenuItem[] = [
  btnConfigs.menuItem,
  inputConfigs.menuItem
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
