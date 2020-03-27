import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {

  powers: string[]= ["Super forza", "Super resistenza", "Vista raggi x", "Invisibilità", "Super velocità"]

  myHero: Hero = {
    name: '',
    power: ''
  };

  heroList: Hero[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  createHero() {
    this.heroList.push({
      name: this.myHero.name,
      power: this.myHero.power
    });
    this.clearForm();
  }

  clearForm() {
    this.myHero = {
      name: '',
      power: ''
    }
  }

}
