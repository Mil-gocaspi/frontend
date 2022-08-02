import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {IUser} from "../user";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
public employees : IUser
  constructor(private _userService: UserService) {
  this.employees = {first_name:"",last_name:"",id:"",email:""}

  }

  ngOnInit(): void {
    this._userService.getEmployee()
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    console.log(this.employees,"employees")
  }

}
