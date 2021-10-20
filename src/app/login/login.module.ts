import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, MaterialModule],
})
export class LoginModule { }
