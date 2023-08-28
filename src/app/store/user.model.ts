export interface UserModel{
    userToken: string
    userId?:any,
    name:string,
    email:string,
    password:string,
    image:string
}

export interface loginError{
    errormsg:string
}