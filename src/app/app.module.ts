import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimeNGModules } from './modules/primeng.module';

import { AppRoutingModule, routeComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/shared/menu/menu.component';

import { CountryService } from './services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ...routeComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...PrimeNGModules
  ],
  providers: [ CountryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
