import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  loginform!:FormGroup

  constructor(){
  
  }
  ngOnInit(): void {
    this.loginform=new FormGroup({
       email:new FormControl('',[Validators.required,Validators.email]),
       password:new FormControl('',Validators.required)
    })
  }
  // private err!:string
  emailValid():string|void{
    const email:any=this.loginform.get('email')
    if(email.touched&&!email.valid){
      if(email.errors.required){
        return  'Please enter your mail Id' 
      }
      else if(email.errors.email){
        return 'Email is Invalid'
      }
    }
    }
    passwordValid():string|void{
      const password:any=this.loginform.get('password')
      if(password.touched&&!password.valid){
        if(password.errors.required){
          return  'Please enter your password' 
        }
      }
      }


  submitForm(){
     if(!this.loginform.valid){
      return
     }
     else{
    console.log(this.loginform)
     }
  }
}
