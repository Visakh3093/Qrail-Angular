import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegisterModel } from '../../model/register.interface';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit {
  errorObj:{[key:string]:string} = {}
  constructor(){}
  ngOnInit(): void {
    this.errorObj = {}
  }

  // inputData:RegisterModel [] = [
  //   { type: "text", key: "current_password", label: "Current Password", placeholder: "Current Password", required: true },
  //   { type: "password", key:"new_password", label: "New Password", placeholder: "New Password", required: true },
  //   { type: "password", key:"confirm_password", label: "Confirm New Password", placeholder: "Confirm New Password", required: true }
  // ]

  formData = new FormGroup({
    profession: new FormControl("Admin",[Validators.required]),
    mobile: new FormControl("+971 5048 5862",[Validators.required]),
    agree: new FormControl("",[Validators.required])
  })

  handleValidate()
  {
    Object.keys(this.formData.controls).forEach((item)=>{
      if(this.formData.get(item)?.errors?.["required"])
      {
        this.errorObj[item] = item + " is required"
      }
    })
    return this.errorObj
  }

  handleSubmit()
  {
    this.errorObj ={}
    this.handleValidate()
    console.log("formData: ",this.formData.value);
    console.log("ErrorObj: ",this.errorObj);
    
  }





}
