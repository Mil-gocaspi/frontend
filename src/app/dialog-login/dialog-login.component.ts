import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {UserService} from "../user.service";

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss']
})



export class DialogLoginComponent implements OnInit {
public username : string
  public password: string
  constructor(private _userService: UserService) {
     this.username = ""
    this.password = ""
  }

  ngOnInit(): void {
  }
submit(){
console.log("username:",this.username,"password:",this.password)
 // this.getSomeUser()
  this._userService.getLoggedinUser(this.username,this.password)
}

getSomeUser(){
  axios.get("http://localhost:9090/62ff87026b75ab5717808dee")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}
}
