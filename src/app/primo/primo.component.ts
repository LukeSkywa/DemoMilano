import { Component, OnInit, Input, ViewChild, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Persona } from '../model/persona.interface';
import { ComunicazioneService } from '../comunicazione.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    console.log('oninit: ' + this.nameToDisplay);
  }

  ngOnDestroy(): void {
    console.log('onDestroy: ' + this.nameToDisplay);
  }
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

  constructor(private comunicazioneService: ComunicazioneService,
    private router: Router, private route: ActivatedRoute) {
    console.log('constructor: ' + this.nameToDisplay);

    this.comunicazioneService.mySubject$.subscribe(value => {
      console.log('check valore comunicazione service: ' + value);
    });

    console.log(JSON.stringify(this.route.snapshot.data));
    if (this.route.snapshot.data['title'] != null) {
      this.parin = this.route.snapshot.data['title'];
    }


  }

  incrementaSwitch() {
    if (this.varSwitch === 4) {
      this.varSwitch = 1;
    } else {
      this.varSwitch++;
    }
  }

  navigate() {
    if (this.varSwitch == 1) {
      this.comunicazioneService.canActivateOnSecondoPath = true;
      this.router.navigateByUrl('/secondo');
    } else {
      this.router.navigateByUrl('/ciclo-vita');
    }
  }
}
