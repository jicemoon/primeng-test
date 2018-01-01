import { Component, OnInit } from '@angular/core';

import { CountryService } from '../../../../services/country.service';

@Component({
  selector: 'prime-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  allCountries: any[];
  country: any;
  countries: any[];
  filteredCountriesSingle: any[];
  filteredCountriesMultiple: any[];
  brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
  filteredBrands: any[];
  brand: string;

  constructor(private countryService: CountryService) { }
  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.allCountries = countries;
    });
   }
  filterCountrySingle(event) {
    const query = event.query;
    this.filteredCountriesSingle = this.filterCountry(query);
  }

  filterCountryMultiple(event) {
    const query = event.query;
    this.countryService.getCountries().then(countries => {
      this.filteredCountriesMultiple = this.filterCountry(query);
    });
  }

  filterCountry(query): any[] {
    const filtered: any[] = [];
    for (let i = 0; i < this.allCountries.length; i++) {
      const country = this.allCountries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(country);
      }
    }
    return filtered;
  }

  filterBrands(event) {
    this.filteredBrands = [];
    for (let i = 0; i < this.brands.length; i++) {
      const brand = this.brands[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredBrands.push(brand);
      }
    }
  }

}
