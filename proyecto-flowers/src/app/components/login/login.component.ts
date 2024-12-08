import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session/session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private sessionService: SessionService) {}

  onLogin(): void {
    if (this.email === 'user@example.com' && this.password === 'password123') {
      this.sessionService.setSession(true);
      this.router.navigate(['/flores']);
    } else {
      this.errorMessage = 'Correo o contraseña incorrectos.';
    }
  }
  
}
