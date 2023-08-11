import { Component, OnInit } from '@angular/core';
import { CountrydataService } from '../services/countrydata.service';

@Component({
  selector: 'app-countrycomp',
  templateUrl: './countrycomp.component.html',
  styleUrls: ['./countrycomp.component.css']
})
export class CountrycompComponent implements OnInit {

  constructor(private CountryDataServ : CountrydataService) { }

  ngOnInit(): void {
  }

  CountryName : String = "";
  resultData : any;
  showsection: boolean = false;

  getCountryName(data: string){
    
    this.CountryName = data;
    this.CountryDataServ.getCountryDataVal(this.CountryName).subscribe((resdata) => {
      console.log(resdata);
      this.resultData = resdata;
      this.showsection = true;
      }
    );
  }

}
