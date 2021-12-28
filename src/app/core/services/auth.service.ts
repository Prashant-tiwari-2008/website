import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConsts  } from '../constant/app.consts';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  // login(username: string, password: string) {

  //   return this.http.post<any>(environment.apiUrl + AppConsts.authlogin, { username, password })
  //       async (result) => {
  //           if (result) {
  //               if (result.success) {
  //                   this.cookieService.deleteCookie('currentUser-theLunchCircle');
  //                   this.cookieService.setCookie('currentUser-theLunchCircle', JSON.stringify(result), 1);
  //                   this.currentUserSubject.next(result);
  //                   return result;
  //               }
  //           }
            
  //       }));
  // }
  login(emailid:string,password:string){
    return this.http.post(environment.apiUrl + AppConsts.authlogin, { emailid, password }).subscribe(res =>{

    })
  }
}

