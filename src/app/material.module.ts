import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatTableModule
  ]
})
export class MaterialModule { }
