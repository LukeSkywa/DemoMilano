import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  powers: string[]= ["Super forza", "Super resistenza", "Vista raggi x", "Invisibilità", "Super velocità"]
  heroList: Hero[]=[];
  
  heroForm: FormGroup;

  get nameControl(): FormControl{
    return this.heroForm.get('name') as FormControl;
  }
  
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
    this.heroList.push({
      name: this.nameControl.value,
      power: this.heroForm.get('power').value
    });
    this.clearForm();
  }

  // il mio obiettivo è resettare i campi name e power
  clearForm() {
    // variante 1 -> setto solo i valori direttamente ai formControl
    // su un formContro tra setValue e patchValue c'è poca differenza
    this.nameControl.setValue('');
    this.heroForm.get('power').patchValue('');
    // variante 2 -> con il patch value posso settare solo alcuni campi del form
    this.heroForm.patchValue({
      name: '',
      power: ''
    });
    // variante 3 -> con il setValue sono obbligato a indicare tutti i campi
    this.heroForm.setValue({
      name: '',
      power: '',
      address: {
        street: '',
        city: '',
        zip: '',
        state: '' 
      }
    });
  }

}
