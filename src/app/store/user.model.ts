export interface UserModel{
    userToken: string,
    _id:any,
    userId?:any,
    name:string,
    email:string,
    password:string,
    image:string
}

export interface loginError{
    errormsg:string
}

export interface UserState {
    userdetails:UserModel[]
} 