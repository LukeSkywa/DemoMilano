import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../model/persona.interface';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {
  @Input()
  parin: string;

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

  oggetto = {
    chiave: 'valoreoggetto'
  }

  oggettoNull = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
