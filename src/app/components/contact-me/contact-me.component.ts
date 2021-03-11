import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
declare let grecaptcha : any

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  
  public informacion: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  submitUserForm() {
    var response = grecaptcha.getResponse();
    console.log(response)
    if(response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        this.informacion= false
        return false;
    }
    this.informacion = true
    return true;
  }

  verifyCaptcha() {
    document.getElementById('g-recaptcha-error').innerHTML = '';
   }

}
