import { Component, OnInit } from '@angular/core';

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
}
}
