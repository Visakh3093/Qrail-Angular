import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {
  errorObj:{[key:string]:string} = {}
  emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  ngOnInit(): void {
    this.errorObj ={}
  }

  formData = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.pattern(this.emailRegex)])
  })

  handleValidate ()
  {
    this.errorObj ={}
    Object.keys(this.formData.controls).forEach((item)=>{
      if(this.formData.get(item)?.errors?.["required"])
      {
        this.errorObj[item] = item + " is required"
      }
      if(this.formData.get(item)?.errors?.["pattern"])
      {
        this.errorObj[item] = "invalid " + item
      }
    })

   return this.errorObj
  }

  handleSubmit()
  {
    
    console.log("Formdata: ",this.formData.value);
    this.handleValidate()
    console.log("Error: ",this.errorObj);
    
    
  }

}
