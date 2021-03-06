import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/autentication.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  group: FormGroup;
  hide: boolean = true;

  constructor(private service: AutenticationService, private router: Router, private form: FormBuilder) { }

  ngOnInit(): void {
    this.group = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  login() {
    const { email, password } = this.group.value;
    if (this.group.valid) {

      this.service.login(email, password).then(x => {
        this.router.navigate(['/']);
      })
    }
  }
}
