import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable} from "rxjs";
import {pushTokenService} from "./services/pushToken.service";
import {FirebaseService} from "./services/firebase.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuards implements CanActivate{
  constructor(private PushTokenService:pushTokenService ) {
  }
  // private pushTokenService : pushTokenService,
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable <boolean| UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree| any {


    // if (this.firebaseService.isLoggedIn) {
    //   return true
    // } else {
    //   alert('нет доступа к странице '+ route.url)
    // }


    this.PushTokenService.getAccess().pipe(map(({data}) => {
      if (data.includes(route.data['accessToken'])){
         return true
      } else {
         alert('нет доступа к странице ${route.url')
      }
     }))
  }
}
