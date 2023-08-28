import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getUserApi, getUserApiSuccess } from 'src/app/store/user.action';
import { UserModel } from 'src/app/store/user.model';
import { getuser } from 'src/app/store/user.selector';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

  pageSubscription!:Subscription
   name:string='M'
   email:string='muji@'
   user!:UserModel
   image$!: string | undefined;
   isImage:boolean=false
   constructor(private store:Store<UserModel>, private AuthService:AuthService){}

   ngOnInit(){

    const userId:any=localStorage.getItem('userId')
    this.store.dispatch(getUserApi({userId:userId}))
    this.pageSubscription=this.store.select(getuser).subscribe(data=>{
      this.user=data
      console.log("in cxomponet",data)
      this.image$=data.image
      if(this.image$){
        this.isImage = true
      }
   })
   }

   onFileSelected(event: any) {
    const file = <File>event.target.files[0];
    const formData = new FormData();
    formData.append('image', file, file.name);
    const userId = localStorage.getItem('userId')
    this.AuthService.imageUpload(formData, userId).subscribe(() => {
      this.ngOnInit()
    })
  }
}
