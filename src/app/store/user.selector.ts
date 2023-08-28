
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserModel } from "./user.model";
import { createEffect } from "@ngrx/effects";

export const UserStateName='user';
export const allUserStateName='alluser'

const errorstate=createFeatureSelector<UserModel>(UserStateName)
export const alluserState=createFeatureSelector<UserModel[]>(allUserStateName)

export const getuser=createSelector(errorstate,(state)=>{
    return state
})


export const getAlluser=createSelector(alluserState,
    (state: UserModel[]) => {
        return state
    }
)