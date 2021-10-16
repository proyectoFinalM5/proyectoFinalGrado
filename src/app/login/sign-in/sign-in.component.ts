import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  group: FormGroup;

  constructor(private service: AutenticationService,
    private router: Router,
    private form: FormBuilder,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.group = this.form.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      verticalPosition: 'top',
      horizontalPosition: 'end',
    })
  }
  login() {
    const { email, password } = this.group.value;
    this.service.login(email, password).then(x => {
      this.router.navigate(['/home']);
    }).catch((error: HttpErrorResponse) => {
      const message = error.error.message || error.message;
      this.openSnackBar(message, "Error");
    })
  }
}
