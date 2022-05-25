import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedinUser!: string;
  constructor() { }

  ngOnInit() {
  }

  loggedin() {
    this.loggedinUser =  localStorage.getItem('token') as string;

    return this.loggedinUser;

  }

  onLogout() {
    localStorage.removeItem('token');

  }
}
