import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';


@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
  public pageTitle: string = 'User Login';

  constructor(
    private router: Router
  ) {}


  model = new User();

  submitted = false;

  onSubmit() { this.submitted = true; }

  userLogin() {
    this.router.navigate(['/recipes'])
  }

}