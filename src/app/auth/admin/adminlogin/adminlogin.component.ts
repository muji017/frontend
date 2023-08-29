
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
// import { Error, UserState } from 'src/app/store/user.state';
import { UserModel } from 'src/app/store/user.model';
import { Subscription } from 'rxjs';
import { geterror } from '../../state/auth.selector';
import { adminloginStart } from '../../state/auth.action';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  pageSubscription!: Subscription;
  errorMsg: string='';
  loginform!: FormGroup; 

  constructor(private store:Store<UserModel>){}


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

       this.store.dispatch(adminloginStart({email,password}))
     }
  }





}
