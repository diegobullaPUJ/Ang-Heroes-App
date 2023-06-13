import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  constructor( private authService: AuthService,
               private router: Router
  ) {}

  onLogin(): void {
    this.authService.login('Fernando@gmail.com', '1111' )
    .subscribe( user => {
      this.router.navigate(['/']);
    })
  }



}
