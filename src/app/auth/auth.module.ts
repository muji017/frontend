import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { MaterialModule } from "src/app/material.module";
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";
import { StoreModule } from "@ngrx/store";
import { authStateName } from "./state/auth.selector";
import { AuthReducer } from "./state/auth.reducer";

const routes:Routes = [
    {
        path: '',
          children:[
            {path: '', redirectTo :'login',pathMatch: 'full'},
            {path: 'login',component:LoginComponent}
        ]
    }
]

@NgModule({
    declarations:[LoginComponent],
    imports:[
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        StoreModule.forFeature(authStateName,AuthReducer),
        RouterModule.forChild(routes)
    ],
})
export class AuthModule{

}