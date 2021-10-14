import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Stud } from '../modal';
import { StudService } from '../stud.service';
@Component({
  selector: 'app-stud-update',
  templateUrl: './stud-update.component.html',
  styleUrls: ['./stud-update.component.css']
})
export class StudUpdateComponent implements OnInit {
  id:number=0;
  userForm:FormGroup;
  constructor(private studserv:StudService,private router:Router,private activeroute:ActivatedRoute) {
    
    this.userForm=new FormGroup({
      "rollno":new FormControl('',Validators.required),
      "name":new FormControl('',Validators.required),
      "email":new FormControl('',[Validators.required,Validators.email])
    });
   }

  ngOnInit(): void {
    this.activeroute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.studserv.getStudByID(paramsData.id).subscribe((data) => {
        //console.log(data)
        delete data.id
        this.userForm.setValue(data)
      })
    })
  }
  submit_details(): void
  {
    this.studserv.updateStudById(this.id,this.userForm.value).subscribe(()=>{
      this.router.navigate(['/stud-list']);
    },
    ()=>{
      alert("wrong");
    });
  }
}

