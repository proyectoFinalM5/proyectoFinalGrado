import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatProgressBarModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
