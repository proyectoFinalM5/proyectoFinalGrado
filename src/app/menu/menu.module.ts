import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

import { NgxPermissionsModule } from 'ngx-permissions';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuRoutingModule } from '../routes/menu-routing.module';

NgxPermissionsModule.forRoot()

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
