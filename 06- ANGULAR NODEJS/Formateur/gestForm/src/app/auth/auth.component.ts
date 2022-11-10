import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  template: `
  <div class="row">
    <div class="col s12 m4 offset-m4"> 
      <div class="card hoverable">      
      <div class="card-content center">
        <span class="card-title">Page de connexion</span>
        <p>{{message}}</p>
        <form #loginForm="ngForm">
          <div> 
            <label for="username">Utilisateur</label>
            <input type="text" id="username" name="username" [(ngModel)]="username" required>
          </div>
          
          <div> 
            <label for="password">Mot de passe</label>
            <input type="password" id="password" name="password" [(ngModel)]="password" required>
          </div>
          <div class="card-action center">
            <button [disabled]="!loginForm.form.valid" (click)="login()">Se connecter</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class AuthComponent implements OnInit {

  username: string;
  password: string;
  message: string = 'Déconnecté';

  constructor(
    private autSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    const isLogged = this.autSrv.login(this.username, this.password);
    if(isLogged){
      this.router.navigate(['formations']);
    } else {
      this.message ='Utilisateur ou mot de passe incorrect';
    }
  }



}
