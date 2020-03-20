import { Component, ViewChild } from '@angular/core';
import { PrimoComponent } from './primo/primo.component';
import { Persona } from './model/persona.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  }

}
