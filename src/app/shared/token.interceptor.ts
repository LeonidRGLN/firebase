// import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
// import {Observable} from "rxjs";
// import {Injectable} from "@angular/core";
//
//
// @Injectable ()
// export  class TokkenInterceptor implements  HttpInterceptor{
//   constructor(private auth:AuthServer) {
//   }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     if(this.auth.isAuthnticated()){
//     req = req.clone({
//       setHeaders: {
//         Authorzition: this.auth.getToken()
//       }
//     })
//   }return next.handle(req)
//   }
// }
