import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegisterModel } from '../../model/register.interface';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  constructor() { }
  errorObj: { [key: string]: string } = {}
  emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  ngOnInit(): void {

  }

  inputData: RegisterModel[] = [
    { type: "text", key: "name", label: "Ful Name", required: true, placeholder: "Ful Name" },
    { type: "email", key: "email", label: "Email Address", required: true, placeholder: "Email Address" },
    { type: "select", key: "subject", label: "Subject", required: true, placeholder: "" },
    { type: "mobile", key: "mobile", label: "Mobile Number", required: true, placeholder: "+974 xxxx xxxx" },
    { type: "textarea", key: "note", label: "Note", required: true, placeholder: "Enter your message" },
    { type: "checkbox", key: "agree", label: "Request a call back", required: true, placeholder: "" },
  ]

  formData = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required,Validators.pattern(this.emailRegex)]),
    subject: new FormControl("", [Validators.required]),
    mobile: new FormControl("", [Validators.required]),
    note: new FormControl("", [Validators.required]),
    agree: new FormControl("", [Validators.required]),
  })

  handleValidate() {
    this.errorObj = {}
    this.inputData.map((item: RegisterModel) => {
      if (item.required) {
        if (this.formData.get(item.key)?.errors?.["required"]) {
          this.errorObj[item.key] = item.label + " is required"
        }
        if (this.formData.get(item.key)?.errors?.["pattern"]) {
          this.errorObj[item.key] = "please provide a valid " + item.label
        }
      }
    })
    return this.errorObj
  }

  handleSubmit() {
    this.errorObj = {}
    console.log("Formdata: ", this.formData.value);
    this.handleValidate()
  }

}
