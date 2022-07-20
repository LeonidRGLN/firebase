import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import { HomeComponent } from './home/home.component';
import {FirebaseService} from "./services/firebase.service";
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import {AppRoutingModule} from "./app-routing.module";
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import {pushTokenService} from "./services/pushToken.service";
import {AuthGuards} from "./auth.guard";
// import {HTTP_INTERCEPTORS} from "@angular/common/http";
// import {TokkenInterceptor} from "./shared/token.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
    TableComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyAdqfFKqoGt-WAwRAqxaeIz60o_-tmVu1Q",
      authDomain: "fir-auth-93a4f.firebaseapp.com",
      databaseURL: "https://fir-auth-93a4f-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "fir-auth-93a4f",
      storageBucket: "fir-auth-93a4f.appspot.com",
      messagingSenderId: "581614269949",
      appId: "1:581614269949:web:18e34ca6e21f1b4da6d594"
    }),
    AppRoutingModule
  ],
  providers: [FirebaseService,pushTokenService,AuthGuards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
