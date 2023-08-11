import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myreactiveform',
  templateUrl: './myreactiveform.component.html',
  styleUrls: ['./myreactiveform.component.css']
})
export class MyreactiveformComponent implements OnInit {

  genders = ['Male', 'Female'];

  skills:Array<any> = [
    {id: 1, name: 'C'},
    {id: 2, name: 'C++'},
    {id: 3, name: 'Java'},
    {id: 4, name: 'JavaScript'},
    {id: 5, name: 'Python'}
  ];

  signupForm: FormGroup;

  forbiddenusername = ['Siddhartha', 'Krishna', 'Aditya', 'Soumya']; //no user can use this username(custom validation).

  constructor(private router: Router) {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]+$'), this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'age': new FormControl(null, [Validators.required]),
      'bdw': new FormControl(25, [Validators.required]),
      'gender': new FormControl('Male'),
      'skill': new FormArray([]),
      'hobbies': new FormArray([])
    });

   }

  ngOnInit() {
    
  }
  
  userdata: any;
  isSubmittedform: boolean = false;
  onSubmit(){
    console.log(this.signupForm.value);
    this.userdata = {
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      age: this.signupForm.value.age,
      bdw: this.signupForm.value.bdw,
      gender: this.signupForm.value.gender,
      skills: this.signupForm.value.skill,
      hobbies: this.signupForm.value.hobbies
    };
    this.isSubmittedform = true;
    console.log(this.userdata);
  }
  
  clickfrmre(){
    this.signupForm.reset();
    this.isSubmittedform = false;
  }

  oncheckChange(id: number, isChecked: any){
    const cbval = <FormArray>this.signupForm.controls.skill;
    const ischeckedval = isChecked.target.checked;
    if(ischeckedval){
      cbval.push(new FormControl({id}));
    }else{
      let index = cbval.controls.findIndex(x => x.value == {id});
      cbval.removeAt(index);
    }
  }

  get username(){
    return this.signupForm.get('username');
  }

  get email(){
    return this.signupForm.get('email');
  }

  get age(){
    return this.signupForm.get('age');
  }

  get bdw(){
    return this.signupForm.get('bdw');
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get hobbiesControls(){
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
  
  //created this custom validation for username but working properly.
  forbiddenNames(control: FormControl): {[s: string]: boolean} | null{
    if(this.forbiddenusername.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

}
