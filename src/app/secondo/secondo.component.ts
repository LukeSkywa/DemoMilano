import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {

  titolo = 'iniziale';

  constructor() { }

  ngOnInit(): void {
  }

  gestioneClick() {
    console.log('ciao');
    this.titolo = 'dopo click';
  }

}
