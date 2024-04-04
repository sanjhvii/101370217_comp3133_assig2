import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  username = '';
  email='';
  password = '';
  error='';


  constructor(private authService: AuthService, private router:Router) { }

  onSignup() {
    this.authService.signup(this.username, this.email, this.password).subscribe(result => {
      console.log(result);
      if(result){
        this.router.navigate(['/']);
      }else{
        this.error="invalid information"        
      }
    });
  }
}
