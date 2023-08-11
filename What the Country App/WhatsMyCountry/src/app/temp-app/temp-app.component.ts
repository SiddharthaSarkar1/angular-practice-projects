import { Component, OnInit } from '@angular/core';
import { CountrydataService } from '../services/countrydata.service';

@Component({
  selector: 'app-temp-app',
  templateUrl: './temp-app.component.html',
  styleUrls: ['./temp-app.component.css']
})
export class TempAppComponent implements OnInit {

  tempDataGet: any;
  inpCityName: string = "";
  isFlag: boolean = false;
  constructor(private tempdataserv: CountrydataService) { }

  ngOnInit(): void {
  }

  getCityName(data: any){
    this.inpCityName = data;
    console.log(this.inpCityName);
    if(this.inpCityName != ""){
    this.tempdataserv.getTempData(this.inpCityName).subscribe((restump) => {
      console.log(restump);
      this.tempDataGet = restump;
      if(this.tempDataGet){
        this.isFlag = true;
      }
    });
  }
  }

}
