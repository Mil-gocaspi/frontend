import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "./user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  getEmployee():Observable<IUser>{
    return this.http.get<IUser>("http://localhost:9090/employee/1/get")
  }
}
