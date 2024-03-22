import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { RegisterModel } from '../../model/register.interface';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  errorObj:{[key:string]:string} = {}
  emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  mobilePattern: RegExp = /^[0-9]{8}$/;

  constructor(private router:Router){}
 
  ngOnInit(): void {
      this.errorObj = {}
  }

  imputData:RegisterModel[] = [
    { type: "select", key: "idtype", label: "ID Type", placeholder: "", required: true, },
    { type: "date", key: "dob", label: "Birth Date", placeholder: "Select", required: true, },
    { type: "text", key: "idnumber", label: "ID Number", placeholder: "ID Number", required: true, },
    { type: "select", key: "gender", label: "Gender", placeholder: "", required: true, },
    { type: "select", key: "title", label: "Title", placeholder: "", required: true, },
    { type: "select", key: "nationality", label: "Nationality", placeholder: "", required: true, },
    { type: "text", key: "first_name", label: "First Name", placeholder: "First name", required: true, },
    { type: "email", key: "email", label: "Email Address", placeholder: "example@gmail.com", required: true, },
    { type: "text", key: "last_name", label: "Last Name", placeholder: "Last name", required: true, },
    { type: "email", key: "re_email", label: "Reconfirm Email", placeholder: "example@gmail.com", required: true, },
    { type: "select", key: "profession", label: "Profession", placeholder: "", required: true, },
    { type: "password", key: "password", label: "Password", placeholder: "Password", required: true, },
    { type: "mobile", key: "mobile_number", label: "Mobile Number", placeholder: "Mobile number", required: true, },
    { type: "password", key: "confirm_password", label: "Confirm Password", placeholder: "Password", required: true, },
    { type: "checkbox", key: "agree_1", label: "Subscribe for offers & promotions", placeholder: "", required: true, },
    { type: "checkbox", key: "agree_2", label: "I have read and agree to the ", placeholder: "", required: true, }



  ]

  formData = new FormGroup({
      idtype:new FormControl("",[Validators.required]),
      dob:new FormControl("",[Validators.required]),
      idnumber:new FormControl("",[Validators.required]),
      gender:new FormControl("",[Validators.required]),
      title:new FormControl("",[Validators.required]),
      nationality:new FormControl("",[Validators.required]),
      first_name:new FormControl("",[Validators.required]),
      last_name:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required,Validators.pattern(this.emailRegex)]),
      re_email:new FormControl("",[Validators.required,Validators.pattern(this.emailRegex)]),
      profession:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required]),
      mobile_number:new FormControl("",[Validators.required,Validators.pattern(this.mobilePattern)]),
      confirm_password:new FormControl("",[Validators.required]),
      agree_1:new FormControl("",[Validators.required]),
      agree_2:new FormControl("",[Validators.required])

  })

  handleValidate(){
    this.imputData.map((item:RegisterModel)=>{
         if(item.required)
         {
          if(this.formData.get(item.key)?.errors?.["required"])
          {
            this.errorObj[item.key] = item.label + " is required"
          }
          if(this.formData.get(item.key)?.errors?.["pattern"])
          {
            this.errorObj[item.key] = "please Provide a valid " + item.label
          }
         }
    })
    return this.errorObj
  }


  handleSubmit()
  {
    this.errorObj ={}
    console.log("FormData: ",this.formData.value);
    this.handleValidate()
    console.log("Validation Error: ",this.errorObj);
    
      
  }


}
