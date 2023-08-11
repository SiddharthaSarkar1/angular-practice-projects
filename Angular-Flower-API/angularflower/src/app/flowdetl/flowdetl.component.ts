import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApidatagetService } from '../services/apidataget.service';

@Component({
  selector: 'app-flowdetl',
  templateUrl: './flowdetl.component.html',
  styleUrls: ['./flowdetl.component.css']
})
export class FlowdetlComponent implements OnInit {

  pid:any = '';
  y : number = 0;
  arrid:number = 0; 
  apiflowersinfodet : any;
  constructor(private route: ActivatedRoute, private apiflowerdata:ApidatagetService) { }

  ngOnInit(): void {
    this.pid = this.route.snapshot.paramMap.get('pid');
    this.y = +this.pid;
    this.arrid = this.y - 1;
    this.apiflowerdata.apiflowre().subscribe((data)=> this.apiflowersinfodet = data);
  }

  


}
