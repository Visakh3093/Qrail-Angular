import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import {isEmpty} from 'lodash';
import { RegisterModel } from '../../model/register.interface';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService:UserService){}
  emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  mobilePattern: RegExp = /^[0-9]{8}$/;
  errorObj:{[key:string]:string} = {}
  
  inputData:RegisterModel[] = [
    {type:"email",key:"email", label:"Email Address",required:true,placeholder:"example@gmail.com"},
    {type:"password",key:"password", label:"Password",required:true,placeholder:"Password"},
   
  ]
  ngOnInit(): void {
    
  }

  passwordValue:boolean = true

  show()
  {
     this.passwordValue = !this.passwordValue
       
  }

  formData = new FormGroup({
     email:new FormControl ("", [Validators.required,Validators.pattern(this.emailRegex)]),
     password: new FormControl ("",[Validators.required]),
  })

  handleValidate()
  {
    this.errorObj ={}
    this.inputData.map((item:RegisterModel)=>{
      if(item.required)
      {
        if(this.formData.get(item.key)?.errors?.["required"])
        {
          this.errorObj[item.key] = item.label + " is required"
        }
        if(this.formData.get(item.key)?.errors?.["pattern"])
        {
          this.errorObj[item.key] = "please provide a valid " + item.label
        }
      }
    })
    return this.errorObj
  }

  handleSubmit()
  {
    console.log("FormData: ",this.formData);
    this.handleValidate()
    console.log("errorObj ",this.errorObj);
    
    if(isEmpty(this.errorObj))
    {
      this.authService.logIn()
    }
  }

}
