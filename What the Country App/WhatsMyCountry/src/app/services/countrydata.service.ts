import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountrydataService {

  nameCuntry: string = "";
  CountryDataUrl: string = "";

  constructor(private http : HttpClient) { }

  getCountryDataVal(data : any){
    this.nameCuntry = data;
    this.CountryDataUrl = "https://restcountries.com/v3.1/name/"+this.nameCuntry;
    return this.http.get(this.CountryDataUrl);
  }

  getTempData(val: any){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=faf9d778970d216acfed437c3ffabdc3`);
  }

}
