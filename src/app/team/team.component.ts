import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {IUser} from "../user";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
public employee : IUser
  constructor(private _userService: UserService) {
    this.employee = this._userService._testUser
  }

  ngOnInit(): void {
    this.getUser("1")
 //    this.createFake(this.employee)
  }

createFake= async (user : IUser) => {
await  this._userService.createUser(user)
    .then(data =>console.log(data))
    .catch(err => console.log(err))
}

getUser = async (id :string)=>{
  await   this._userService.getUser(id)
    .then((data ) => this.employee = <IUser>data)
    .catch(err => console.log(err))
  console.log(this.employee)
}


}
