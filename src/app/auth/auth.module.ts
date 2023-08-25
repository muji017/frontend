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

const routes:Routes = [
    {
        path: '',
          children:[
            {path: '', redirectTo :'login',pathMatch: 'full'},
            {path: 'login',component:LoginComponent},
            {path:'signup',component:SignupComponent},
            {path:'userhome',component:UserhomeComponent},
            {path:'userprofile',component:UserprofileComponent}
        ]
    }
]

@NgModule({
    declarations:[LoginComponent,SignupComponent, UserhomeComponent, UserheaderComponent, UserprofileComponent],
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