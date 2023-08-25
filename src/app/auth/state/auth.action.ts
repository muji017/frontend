import { createAction, props } from "@ngrx/store";
import { UserModel } from "src/app/store/user.model";
// import { AuthUser,Error } from "src/app/store/user.state";

export const loginStart = createAction("loginStart",props<{email:string,password:string}>())

export const signup = createAction("signup",props<{name:string,email:string,password:string}>())

export const signupSuccess = createAction("loginSuccess",props<{data:UserModel}>());


export const loginSuccess = createAction("loginSuccess",props<{data:UserModel}>());

export const loginFail =createAction("loginFail",props<{error:Error}>());


export const setErrorMessage = createAction("setErrorMessage",props<{ message: string }>());