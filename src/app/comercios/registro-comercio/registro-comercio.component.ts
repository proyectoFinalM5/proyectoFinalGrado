import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComercioService } from 'src/app/services/comercio.service';
import { Comercio } from 'src/app/entidades/comercio';

@Component({
  selector: 'app-registro-comercio',
  templateUrl: './registro-comercio.component.html',
  styleUrls: ['./registro-comercio.component.scss']
})
export class RegistroComercioComponent implements OnInit {

 /* com: Comercio[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];*/

  com : Comercio;

  group: FormGroup;

  constructor(private service: ComercioService,
    private router: Router,
    private form: FormBuilder) { }

  ngOnInit(): void {
    this.group = this.form.group({

    });
  }

}
