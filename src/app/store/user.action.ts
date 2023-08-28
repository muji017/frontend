
import { createAction, props } from "@ngrx/store"
import { UserModel } from "./user.model"
import { createEffect } from "@ngrx/effects"


export const getUserApi=createAction("getUserApi",props<{userId:string}>())

export const getUserApiSuccess = createAction("getUserApiSuccess",props<{ User: UserModel }>())

export const getAllUserApi=createAction("getAllUserApi")

export const getAllUserApiSuccess =createAction("getAllUserApiSuccess",props<{userdetails:UserModel[]}>())

export const deleteUser= createAction("deleteUser",props<{userId:string}>())
