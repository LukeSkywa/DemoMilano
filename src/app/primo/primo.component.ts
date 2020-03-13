import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {
  @Input()
  parin: string;

  items = [1,2];

  variabile = 'valore';

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
