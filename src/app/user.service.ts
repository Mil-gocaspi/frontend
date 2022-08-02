import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "./user";
import axios from "axios"


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  getEmployee(){
    return new Promise((resolve, reject) => {
      axios.get<IUser>("http://localhost:9090/employee/1/get")
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })

  }
}
