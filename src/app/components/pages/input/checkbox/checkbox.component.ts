import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../../services/country.service';

@Component({
  selector: 'prime-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  selectedCities: string[] = [];
  selectedCategories: string[] = ['Technology', 'Sports'];
  checked = false;

  contryList: {name: string, code: string }[];
  selectedCountries = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.contryList = countries.filter((item, idx) => {
        const b = idx % 5 === 0 && Math.random() < 0.5 && item.name.length < 15;
        if (b && Math.random() >= 0.5) {
          this.selectedCountries.push(item);
        }
        return b;
      });
    });
  }
}
