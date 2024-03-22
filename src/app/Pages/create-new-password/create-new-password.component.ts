import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegisterModel } from '../../model/register.interface';

@Component({
  selector: 'app-create-new-password',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './create-new-password.component.html',
  styleUrl: './create-new-password.component.css'
})
export class CreateNewPasswordComponent implements OnInit {
  errorObj:{[key:string]:string} = {}
  ngOnInit(): void {
    
  }

  formData = new FormGroup({
    temp_password: new FormControl("",Validators.required),
    new_password: new FormControl("",Validators.required),
    confirm_password: new FormControl("",Validators.required),
  })

  inputData:RegisterModel[] =[
    { type: "text", key: "temp_password", label: "Current Password", placeholder: "Current Password", required: true },
    { type: "password", key:"new_password", label: "New Password", placeholder: "New Password", required: true },
    { type: "password", key:"confirm_password", label: "Confirm New Password", placeholder: "Confirm New Password", required: true }
  ]

  handleValidate()
  {
    this.errorObj = {}
    this.inputData.map((item:RegisterModel)=>{
      if(item.required)
      {
        if(this.formData.get(item.key)?.errors?.["required"])
        {
          this.errorObj[item.key] = item.label + " is required"
        }
      }
    })
    return this.errorObj
  }

  handleSubmit() {
    this.errorObj = {}
    console.log("FormData: ", this.formData.value);
    this.handleValidate()
    console.log("Error: ",this.errorObj);
    
  }
}




