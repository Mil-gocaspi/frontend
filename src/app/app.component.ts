import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogLoginComponent} from "./dialog-login/dialog-login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  showFiller = false;

  constructor(public dialog: MatDialog) {
  }

  openLogin(){
    this.dialog.open(DialogLoginComponent)
  }
}
