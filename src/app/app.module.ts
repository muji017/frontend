import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
// import { LoginComponent } from './auth/login/login.component';
// import { SignupComponent } from './component/signup/signup.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './auth/state/auth.reducer';
import { HttpClientModule } from '@angular/common/http';
import { UserEffects } from './store/user.effects';
import { UserStateName } from './store/user.selector';
import { UserReducer } from './store/user.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    // LoginComponent,
    // SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(UserStateName,UserReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
