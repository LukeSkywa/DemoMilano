import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloVitaComponent } from './ciclo-vita.component';

describe('CicloVitaComponent', () => {
  let component: CicloVitaComponent;
  let fixture: ComponentFixture<CicloVitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloVitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloVitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
