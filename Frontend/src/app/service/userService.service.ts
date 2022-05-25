import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

addUser(user: User){

  let users=[];
  if(localStorage.getItem('User')){

    users = JSON.parse(localStorage.getItem('User') as string);
    users = [user, ...users];

  }
  else{
    users = [user];
  }
  localStorage.setItem('User',JSON.stringify(users));

}

}
