import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getUserApi, getUserApiSuccess } from 'src/app/store/user.action';
import { UserModel } from 'src/app/store/user.model';
import { getuser } from 'src/app/store/user.selector';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

  pageSubscription!:Subscription
   name:string='Mujeeb'
   email:string='muji@gmail.com'
   user!:UserModel
   constructor(private store:Store<UserModel>){}

   ngOnInit(){

    this.store.dispatch(getUserApi({userId:"64e61ea9e48e74aa1009b9dc"}))
  //   this.pageSubscription=this.store.select(getUserApiSuccess).subscribe(data=>{
  //     this.user=data
  //  }
  //  )
   }
}
