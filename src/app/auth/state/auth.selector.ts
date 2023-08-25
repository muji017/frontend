import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthModel } from "./auth.model";

export const authStateName='auth';

const errorstate=createFeatureSelector<AuthModel>(authStateName)

export const geterror=createSelector(errorstate,(state)=>{
    return state.error
})


