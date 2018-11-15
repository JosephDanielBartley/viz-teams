import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {
  }


  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password);
    this.router.navigate(['home']);

  }

}
