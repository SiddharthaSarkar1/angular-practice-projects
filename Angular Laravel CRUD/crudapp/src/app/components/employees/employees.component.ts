import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any;
  employee = new Employee();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(){
    this.dataService.getData().subscribe((res) => {
    console.log(res);
    this.employees = res;
    });
  }

  insertData(val: any){
    console.log(val);
    this.dataService.insertData(val).subscribe((res) => {
      console.log(res);
      this.getEmployeesData()
    });
  }

  deleteData(valId: any){
    console.log(valId);
    this.dataService.deleteData(valId).subscribe((res) => {
      console.log(res);
      this.getEmployeesData()
    });
  }

}
