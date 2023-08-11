import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starttemp',
  templateUrl: './starttemp.component.html',
  styleUrls: ['./starttemp.component.css']
})
export class StarttempComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ongtp(pageName:any):void{
    this.router.navigate([`${pageName}`])
  }

}
