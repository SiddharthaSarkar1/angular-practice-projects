import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydropdowncomp',
  templateUrl: './mydropdowncomp.component.html',
  styleUrls: ['./mydropdowncomp.component.css']
})
export class MydropdowncompComponent implements OnInit {

  myipval:string = 'none';
  constructor() { }

  ngOnInit(): void {
  }

  clickingHere(event: any){
    const eventVal = event.target.value; 
    console.log(eventVal);
  }

}
