import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
// import { User, UserState } from 'src/app/store/user.state';
import { signup } from 'src/app/auth/state/auth.action';
import { UserModel } from 'src/app/store/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupform!:FormGroup;
  pagetitle:string="SignUp"
  constructor(private store:Store<UserModel>){}

  
  ngOnInit(): void {
    this.signupform = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        // Validators.pattern(/^[\w+.-]+@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
      ]),
    });
  }
   showNameError():any  {
     
    const name:any= this.signupform.get('name');
    if (name.touched && !name.valid) {
      if (name.errors.required) {
        return 'Name is required';
      }

      if (name.errors.minlength) {
        return 'Name should be of minimum 6 characters length';
      }
    }
  }
  showEmailError():any  {
     
    const email:any= this.signupform.get('email');
    if (email.touched && !email.valid) {
      if (email.errors.required) {
        return 'Email is required';
      }

      if (email.errors.minlength) {
        return 'Email should be of minimum 8 characters length';
      }
      if (email.errors.pattern){
        return 'Invalid Email'
      }
    }
  }

  showPasswordError():any  {
     
    const password:any= this.signupform.get('password');
    if (password.touched && !password.valid) {
      if (password.errors.required) {
        return 'Password is required';
      }

      if (password.errors.minlength) {
        return 'Password should be of minimum 6 characters length';
      }
      // if (password.errors.pattern){
      //   return 'Week password include number and alphabets'
      // }
    }
  }
   
   signup(){
      
      if(!this.signupform.valid){
        return
      }
      else{
        console.log(this.signupform);
        const name=this.signupform.value.name;
        const email=this.signupform.value.email;
        const password= this.signupform.value.password

        this.store.dispatch(signup({name,email,password}))
      }
      
  }
}
