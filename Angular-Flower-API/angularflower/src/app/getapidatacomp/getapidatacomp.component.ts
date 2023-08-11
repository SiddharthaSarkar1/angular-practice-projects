import { Component, OnInit } from '@angular/core';
import { ApidatagetService } from '../services/apidataget.service';

@Component({
  selector: 'app-getapidatacomp',
  templateUrl: './getapidatacomp.component.html',
  styleUrls: ['./getapidatacomp.component.css']
})
export class GetapidatacompComponent implements OnInit {

  resVal: any;
  constructor(private http: ApidatagetService) { }

  ngOnInit(): void {
    this.http.gettingData().subscribe((data)=> this.resVal = data);
  }

}
