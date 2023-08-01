import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: any) {
    const isAuthenticated = this.authService.login(this.username, this.password);

    if (isAuthenticated) {
      alert('Login riuscito!');

      window.location.href = 'https://www.epicode.com';
    } else {
      alert('Username o password errati');
    }
  }
}
