import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {
  constructor(private authService: AuthService) {}

  onSubmit(form: any) {
    const userData = form.value;
    this.authService.registerUser(userData);
    alert('Registrazione completata con successo!');
    form.reset();
  }
}
