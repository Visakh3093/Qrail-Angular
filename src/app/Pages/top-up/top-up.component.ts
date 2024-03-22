import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterModel } from '../../model/register.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-top-up',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './top-up.component.html',
  styleUrl: './top-up.component.css'
})
export class TopUpComponent implements OnInit {
  errorObj: { [key: string]: string } = {}
  emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  mobilePattern: RegExp = /^[0-9]{10}$/;
  ngOnInit(): void {
    this.errorObj = {}
  }

  formData = new FormGroup({
    travelcard_no: new FormControl(""),
    email: new FormControl("rachel51297@gmail.com", [Validators.required, Validators.pattern(this.emailRegex)]),
    topup_amount: new FormControl("", [Validators.required,]),
    card_type: new FormControl("", [Validators.required]),
    agree: new FormControl("", [Validators.required])

  })

  inputData: RegisterModel[] = [
    {type:"select",key:"travelcard_no",label:"Select Travel card",placeholder:"31061800 XXXXXXXXX",required:false},
    {type:"email",key:"email",label:"Email address",placeholder:"example@gmail.com",required:true},
    {type:"text",key:"topup_amount",label:"Top Up Amount",placeholder:"",required:true},
    {type:"button",key:"card_type",label:"Card Type",placeholder:"",required:true},
    {type:"checkbox",key:"agree",label:"I have read and agree to the",placeholder:"Terms of service & Privacy policy",required:true}

  ]

  handleTopup(value:string,button_no:string)
  { 
      console.log("click: ", value);
      // this.formData.value.topup_amount = value
    this.formData.patchValue({topup_amount:value})
    
  }

  buttonValue = [
    {type:"button",value:"10",name:"button_1",placeholder:"QAR 10"},
    {type:"button",value:"50",name:"button_2",placeholder:"QAR 50"},
    {type:"button",value:"100",name:"button_3",placeholder:"QAR 100"}
  ]

  handleNumber(event:any)
  {
    const char_code = event.charCode || event.which
  

    if(char_code >= 48 && char_code <= 57)
    {
     
      return true
        
    }
    else
    {
      return false  
    }
  }


  handleValidate()
  {
    this.errorObj ={}
    this.inputData.map((item:RegisterModel)=>{
      if(item.required)
      {
        if(this.formData.get(item.key)?.errors?.['required'])
        {
          this.errorObj[item.key] = item.label+" is required"
        
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

    this.errorObj ={}

    this.handleValidate()
    console.log("topup_amount: ",this.formData.value);
    if(this.formData.value.topup_amount && (parseInt(this.formData.value.topup_amount) > 500 || parseInt(this.formData.value.topup_amount) < 10))
    {
     this.errorObj["topup_amount"] = "error"
    }  
        console.log("ErrorObj: ",this.errorObj);
  }




}
