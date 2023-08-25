
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserModel } from "./user.model";

export const UserStateName='user';

const errorstate=createFeatureSelector<UserModel>(UserStateName)

export const getuser=createSelector(errorstate,(state)=>{
    return state
})