import { Component, OnInit, Input, ViewChild, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Persona } from '../model/persona.interface';
import { ComunicazioneService } from '../comunicazione.service';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit, OnDestroy, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      console.log('changes: ' + JSON.stringify(changes));
    
      if (changes['parin'] != null && changes['parin'].previousValue !== changes['parin'].currentValue
        && !changes['parin'].firstChange) {
        console.log('è stato modificato parin');
      }
      if (changes['name'] != null && changes['name'].previousValue !== changes['name'].currentValue
        && !changes['name'].firstChange) {
        console.log('è stato modificato name');
      }
    }
  }

  ngOnInit(): void {
    console.log('oninit: '+this.nameToDisplay);
  }
  
  ngOnDestroy(): void {
    console.log('onDestroy: '+this.nameToDisplay);
  }

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

  constructor(private comunicazioneService: ComunicazioneService) {
    console.log('constructor: '+this.nameToDisplay);
  
    this.comunicazioneService.mySubject$.subscribe(value => {
      console.log('check valore comunicazione service: '+value);
    });

  }

  incrementaSwitch() {
    if (this.varSwitch === 4) {
      this.varSwitch = 1;
    } else {
      this.varSwitch++;
    }
  }

}
