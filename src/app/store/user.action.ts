
import { createAction, props } from "@ngrx/store"
import { UserModel } from "./user.model"


export const getUserApi=createAction("getUserApi",props<{userId:string}>())

export const getUserApiSuccess = createAction("getUserApiSuccess",props<{ User: UserModel }>())