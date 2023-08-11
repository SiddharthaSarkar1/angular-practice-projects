import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidatagetService {

  urlapi = "https://gist.githubusercontent.com/sandeepcmsm/2e1f5762fa5ca351d8f129e73c730071/raw/30fb98f124445596a2a96f60a233ab13d07167d0/flowers.json";

  constructor(private http:HttpClient) { }

  gettingData(){
    return this.http.get('https://api.publicapis.org/entries');
  }

  apiflowre(){
    return this.http.get(this.urlapi);
  }

}
