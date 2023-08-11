import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApidatagetService } from '../services/apidataget.service';

@Component({
  selector: 'app-flowercard',
  templateUrl: './flowercard.component.html',
  styleUrls: ['./flowercard.component.css']
})
export class FlowercardComponent implements OnInit {
  title = 'angularflower';
  
  apiflowersinfo : any;
  constructor(private apiflowerdata:ApidatagetService, private router: Router){ 
    apiflowerdata.apiflowre().subscribe((data)=> this.apiflowersinfo = data)
  }

  ngOnInit(): void {
  }

  onflowerdet(pageName:any):void{
    this.router.navigate([`fldet/${pageName}`])
  }

}
