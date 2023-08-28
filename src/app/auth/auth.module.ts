import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { MaterialModule } from "src/app/material.module";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";
import { StoreModule } from "@ngrx/store";
import { authStateName } from "./state/auth.selector";
import { AuthReducer } from "./state/auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./state/auth.effects";
import { SignupComponent } from "./signup/signup.component";
import { UserhomeComponent } from './userhome/userhome.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {  UserGuard } from "../authguard/user.guard";
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';

const routes:Routes = [
    {
        path: '',
          children:[
            {path: '', redirectTo :'login',pathMatch: 'full'},
            {path: 'login',component:LoginComponent},
            {path:'signup',component:SignupComponent},
            {path:'userhome',component:UserhomeComponent,canActivate:[UserGuard]},
            {path:'userprofile',component:UserprofileComponent,canActivate:[UserGuard]},
            {path:'admin',component:AdminloginComponent},
            {path:'adminhome',component:AdminhomeComponent},
            {path:'userlist',component:UserlistComponent}
            
        ]
    }
]

@NgModule({
    declarations:[LoginComponent,SignupComponent, UserhomeComponent, UserheaderComponent, UserprofileComponent, AdminhomeComponent, AdminheaderComponent, UserlistComponent, AdminloginComponent],
    imports:[
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([AuthEffects]),
        StoreModule.forFeature(authStateName,AuthReducer),
    ],
})
export class AuthModule{

}