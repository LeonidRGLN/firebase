import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "./services/firebase.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {pushTokenService} from "./services/pushToken.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firebase';
  isSignedIn = false;

  constructor(public firebaseService: FirebaseService) {

  }

  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }

  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
  }

  handleLogout() {
    this.isSignedIn = false
  }

}
