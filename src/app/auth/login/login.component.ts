import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.action';
// import { Error, UserState } from 'src/app/store/user.state';
import { UserModel } from 'src/app/store/user.model';
import { geterror } from '../state/auth.selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  pageSubscription!:Subscription
  loginform!:FormGroup
  errorMsg!:string
  constructor(private store:Store<UserModel>){
  
  }
  ngOnInit(): void {
    this.loginform=new FormGroup({
       email:new FormControl('',[Validators.required,Validators.email]),
       password:new FormControl('',Validators.required)
    })
      this.pageSubscription=this.store.select(geterror).subscribe(data=>{
         this.errorMsg=data
     console.log("inside page")
 
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
        
      const email=this.loginform.value.email
      const password=this.loginform.value.password

       this.store.dispatch(loginStart({email,password}))
     }
  }
}
