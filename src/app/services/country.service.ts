import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }
  getCountries(): Promise<any[]> {
    return this.http.get('/assets/showcase/data/countries.json')
      .toPromise().then((data: {data: any[]}) => {
        return data.data;
      });
  }
}
