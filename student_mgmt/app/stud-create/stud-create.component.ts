import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudService } from '../stud.service';
@Component({
  selector: 'app-stud-create',
  templateUrl: './stud-create.component.html',
  styleUrls: ['./stud-create.component.css']
})
export class StudCreateComponent implements OnInit {
  userForm:FormGroup;
  constructor(private studserv:StudService,private router:Router) {
    this.userForm=new FormGroup({
      'rollno':new FormControl('',Validators.required),
      'name':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.email])
    });
   }

  ngOnInit(): void {
  }
  submit_details()
  {
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
    if(this.userForm.valid)
    {
      this.studserv.saveStud(this.userForm.value).subscribe(()=>{
        this.router.navigate(['/stud-list']);
    
    },
    ()=>{
      alert("wrong");
    });
    
  }
}
}
