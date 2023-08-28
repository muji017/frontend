import { createReducer, on } from "@ngrx/store";
import { initialState } from "./user.state";
import { getUserApiSuccess } from "./user.action";


const _userReducer = createReducer(
    initialState,
    on(getUserApiSuccess, (state:any, action:any) => {
        console.log("id in reducer",action.User);
        
      return {
        ...state,
        name: action.User.name,
        email:action.User.email,
        image:action.User.image
      };
    }),
)
export function UserReducer(state:any, action:any){
    return _userReducer(state,action)
}