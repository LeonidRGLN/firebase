import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export interface AccessResponse{
  data:string[]
}


@Injectable({
  providedIn: 'root'
})

export class pushTokenService {

  constructor(private http: HttpClient) {}

    getAccess(): Observable<AccessResponse>{
      return this.http.get<AccessResponse>('https://fir-auth-93a4f-default-rtdb.europe-west1.firebasedatabase.app/access-rights.json')
  }


  getAccessAll(): Observable<AccessResponse>{
    return this.http.get<AccessResponse>('https://fir-auth-93a4f-default-rtdb.europe-west1.firebasedatabase.app/access-rights-full.json')
  }

}
