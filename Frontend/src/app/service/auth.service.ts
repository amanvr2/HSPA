import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }


authUser(user: any) {
  let UserArray = [];
  if (localStorage.getItem('User')) {
    UserArray = JSON.parse(localStorage.getItem('User') as string);
  }
  return UserArray.find((p: { userName: any; password: any; }) => p.userName === user.userName && p.password === user.password);
}

}
