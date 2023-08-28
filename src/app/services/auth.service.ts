import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../store/user.model';
// import { UserModel } from '../store/user.state';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = 'http://localhost:4000';

  constructor( private http:HttpClient) { }

  login(email: string, password: string):Observable<UserModel> {
    
    return this.http.post<UserModel>(`${this.apiUrl}/login`, { email, password });
  }

  signup(name:string,email: string, password: string):Observable<UserModel> {
    console.log(name)
    const payload = {name, email, password };
    return this.http.post<UserModel>(`${this.apiUrl}/signup`, payload);
  }  

  getUserDetails(userId:any):Observable<UserModel> {
    console.log('getuser service')
    return this.http.post<UserModel>(`${this.apiUrl}/getUserDetails`,{userId})
  }

  imageUpload(file: object, id: string | null) {
    return this.http.post(`${this.apiUrl}/image?id=${id}`, file)
  }

  getAllUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.apiUrl}/getAllUsers`)
  }

  deleteUser(userId:any){
    console.log(userId)
    return this.http.post(`${this.apiUrl}/deleteUser`,{userId})
  }
  
}

