import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error='';

  constructor(private authService: AuthService, private router:Router) { }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(result => {
      if(result){
        this.router.navigate(['/']);
      }else{
        this.error="invalid information"        
      }
    });
  }
}
