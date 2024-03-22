import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegisterModel } from '../../model/register.interface';

@Component({
  selector: 'app-topup-cards',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './topup-cards.component.html',
  styleUrl: './topup-cards.component.css'
})
export class TopupCardsComponent implements OnInit {
  errorObj: { [key: string]: string } = {}
  emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  mobilePattern: RegExp = /^[0-9]{10}$/;
  ngOnInit(): void {
    this.errorObj = {}
  }
  formData = new FormGroup({
    new_card:new FormControl("1"),
    travelcard_no: new FormControl("",[Validators.required,Validators.pattern(this.mobilePattern)]),
    travelcard_sub: new FormControl(""),
    email: new FormControl("rachel51297@gmail.com", [Validators.required, Validators.pattern(this.emailRegex)]),
    topup_amount: new FormControl("", [Validators.required,]),
    card_type: new FormControl("credit", [Validators.required]),
    agree: new FormControl("", [Validators.required])

  })

  inputData: RegisterModel[] = [
    {type:"select",key:"new_card",label:"Travel card no",placeholder:"31061800 XXXXXXXXX",required:true},
    {type:"number",key:"travelcard_no",label:"Select Travel card",placeholder:"31061800 XXXXXXXXX",required:true},
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

  move(e:any,p:any,c:any,n:any)
  {
    if(c.value.length == 10)
    {
      if(n!='')
      {
        n.focus()

      }
    }
    if(e.key == "Backspace")
    {
      if(p !='')
      {
        p.focus()
      }
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

    if(this.formData.value.travelcard_sub?.length != 1)
    {
      this.errorObj["travelcard_no"] = "invalid travelcard_no"
    }

    return this.errorObj
  }

  handleSubmit()
  {

    this.errorObj ={}

    this.handleValidate()
    console.log("formData: ",this.formData.value);
    if(this.formData.value.topup_amount && (parseInt(this.formData.value.topup_amount) > 500 || parseInt(this.formData.value.topup_amount) < 10))
    {
     this.errorObj["topup_amount"] = "error"
    }  
        console.log("ErrorObj: ",this.errorObj);
  }

}
