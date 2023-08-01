import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/registrazione', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
