import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username = "";
  public password = "";

  constructor(private router: Router, private authService: AuthService) { }

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigateByUrl("/welcome")
    } else {
      alert("Invalid Credentials");
    }
  }
}
