import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimeNGModules } from './modules/primeng.module';

import { AppRoutingModule, routeComponents } from './routings/app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/shared/menu/menu.component';

import { CountryService } from './services/country.service';
import { CarService } from './services/car.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ...routeComponents
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...PrimeNGModules
  ],
  providers: [
    CountryService,
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
