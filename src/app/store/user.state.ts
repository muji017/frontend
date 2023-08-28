import { UserModel } from "./user.model";





 export const initialState: UserModel = {
     name: '',
     email: '',
     password: "",
     userToken: "",
     image:"",
     _id:""
 }

 export const alluserState: UserModel[] = []