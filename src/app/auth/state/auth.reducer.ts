import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';
import { adminloginSuccess, loginFail, loginSuccess } from './auth.action';

const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state:any, action:any) => {
        console.log("id in reducer",action.data.userId);
        
      return {
        ...state,
        data: action.data,
      };
    }),
    on(loginFail, (state:any, action:any) => {
        console.log("id in error",action.error.error.emailError);
        if(action.error.error.emailError){
        
      return {
        ...state,
        error: action.error.error.emailError
      };
    }
    else{
      return {
        ...state,
        error: action.error.error.passError
      };
    }
    }),
    on(adminloginSuccess, (state:any, action:any) => {
      console.log("id in reducer",action.data.userId);
      
    return {
      ...state,
      data: action.data,
    };
  }),
)

export function AuthReducer(state:any, action:any){
    return _authReducer(state,action)
}