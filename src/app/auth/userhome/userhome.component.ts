import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getUserApi } from 'src/app/store/user.action';
import { UserModel } from 'src/app/store/user.model';
import { getuser } from 'src/app/store/user.selector';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  
  pageSubscription!:Subscription
  user!:string
  constructor(private store:Store<UserModel>){}

  ngOnInit(){
    const userId:any=localStorage.getItem('userId')
    this.store.dispatch(getUserApi({userId:userId}))
    this.pageSubscription=this.store.select(getuser).subscribe(data=>{
      this.user=data.name
   })

  }
}
