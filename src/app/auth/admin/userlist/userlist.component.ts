import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscribable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { deleteUser, getAllUserApi} from 'src/app/store/user.action';
import { UserModel } from 'src/app/store/user.model';
import { getAlluser } from 'src/app/store/user.selector';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
   
  user:UserModel[] | undefined
  users$!: Observable<UserModel[]>;
  pageSubscription: any;
  constructor(private store:Store<UserModel>, private service:AuthService ){}

  ngOnInit(){
    //  this.service.getAllUsers().subscribe((res)=>{
    //   this.user=res
    //   console.log(this.user)
    //  })
    this.store.dispatch(getAllUserApi())
    this.users$= this.store.pipe(select(getAlluser));  
    this.pageSubscription=this.store.select(getAlluser).subscribe(data=>{
      this.user=data
      console.log("in cxomponet",data)

   })
  }
  onDelete(id:any){
    
      this.store.dispatch(deleteUser({userId:id}))
      this.ngOnInit()
  }
}
