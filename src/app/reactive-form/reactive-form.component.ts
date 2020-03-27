import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  powers: string[]= ["Super forza", "Super resistenza", "Vista raggi x", "Invisibilità", "Super velocità"]
  heroList: Hero[]=[];
  
  heroForm: FormGroup;
  
  constructor(private fb: FormBuilder) { 
    this.heroForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])], // questa sintassi, con il compose, mi permette di indicare più validatori
      power: ['', Validators.required], // qui non posso indicare più di validatori, dovrei usare il compose come sopra
      address: this.fb.group({
        street: '',
        city: '',
        zip: '',
        state: '' 
      })
    });
  }

  ngOnInit(): void {
  }

  createHero() {
    
    this.clearForm();
  }

  clearForm() {
    
  }

}
