import { createReducer, on } from "@ngrx/store";
import { initialState } from "./user.state";
import { getAllUserApiSuccess, getUserApiSuccess } from "./user.action";
import { alluserState } from "./user.state";

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


const _allUserReducer= createReducer(
  alluserState,
  on(getAllUserApiSuccess, (_state, { userdetails }) => {
    console.log("inside reducer", Object.values(userdetails[0]))
    return  Object.values(userdetails[0])
    
  })
)

export function allUserReducer(state:any, action:any){
  return _allUserReducer(state,action)
}