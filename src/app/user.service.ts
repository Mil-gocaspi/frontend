import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "./user";
import axios from "axios"
import {error} from "@angular/compiler-cli/src/transformers/util";


@Injectable({
  providedIn: 'root'
})

export class UserService {
private _testUrl : string = "http://localhost:9090/proposals/"
public _testUser : IUser = <IUser>{first_name:"Tes",last_name:"Ter",id:"2357",email:"prime@mail.com"}
  constructor() {

  }

  getUser(id : string): Promise<IUser>
  {
    return new Promise((resolve, reject) => {
      axios.get<IUser>(this._testUrl + id)
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
  }

  createUser(user : IUser) : Promise<any>
  {
    return new Promise((resolve, reject) =>{
      axios.post(this._testUrl + "create",user)
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
  }
  getLoggedinUser(username: string, password:string){
    let UserPayload = {username: username, password: password}
    axios.post("http://localhost:9090/login",JSON.stringify(UserPayload))
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  }


}
