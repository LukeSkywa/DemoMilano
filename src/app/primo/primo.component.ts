import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Persona } from '../model/persona.interface';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {
  @Input('inputIngresso')
  parin: string;

  nameToDisplay: string;

  @Input()
  set name(valueInput: string) {
    this.nameToDisplay = valueInput + 'suffisso';
  }

  profili: Persona[] = [
    { nome: 'Luca', cognome: 'Alicata' },
    { nome: 'Mario', cognome: 'Bianchi' },
    null,
    { nome: 'Marco', cognome: 'Rossi' },
    { nome: 'Diego', cognome: 'Rossi' },
    { nome: 'Domenica', cognome: 'Rossi' }
  ];

  varBool = false;
  varString = '';
  varNum = 0;
  myDate: Date = new Date();

  oggettoNull = null;

  varSwitch = 1;

  constructor() {
    switch (this.varSwitch) {
      case 1: {
        console.log('primo valore');
        break;
      }
      case 2: {
        console.log('secondo valore');
        break;
      }
      case 3: {
        console.log('terzo valore');
        break;
      }
      case 4: {
        console.log('quarto valore');
        break;
      }
    }
    if (this.varSwitch === 1) {
      console.log('primo valore');
    }
    if (this.varSwitch === 2) {
      console.log('secondo valore');
    }
    if (this.varSwitch === 3) {
      console.log('terzo valore');
    }
    if (this.varSwitch === 4) {
      console.log('quarto valore');
    }

  }

  incrementaSwitch() {
    if (this.varSwitch === 4) {
      this.varSwitch = 1;
    } else {
      this.varSwitch++;
    }
  }

  ngOnInit(): void {
  }

}
