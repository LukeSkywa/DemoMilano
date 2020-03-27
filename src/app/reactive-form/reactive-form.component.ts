import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  powers: string[]= ["Super forza", "Super resistenza", "Vista raggi x", "Invisibilità", "Super velocità"]
  heroList: Hero[]=[];
  
  heroForm: FormGroup = new FormGroup({
    name: new FormControl(),
    power: new FormControl()
  });
  
  constructor() { }
  
  ngOnInit(): void {
  }

  createHero() {
    
    this.clearForm();
  }

  clearForm() {
    
  }

}
