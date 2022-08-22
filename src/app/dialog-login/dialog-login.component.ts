import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss']
})



export class DialogLoginComponent implements OnInit {
public username : string
  public password: string
  constructor() {
     this.username = ""
    this.password = ""
  }

  ngOnInit(): void {
  }
submit(){
console.log("username:",this.username,"password:",this.password)
  this.getLoggedinUser()
 // this.getSomeUser()
}

getLoggedinUser(){
 let UserPayload = {username: this.username, password: this.password}
  axios.post("http://localhost:9090/login",JSON.stringify(UserPayload))
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}


getSomeUser(){
  axios.get("http://localhost:9090/62ff87026b75ab5717808dee")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}
}
