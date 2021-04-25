import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertArgentsPageComponent } from './transfert-argents-page.component';

describe('TransfertArgentsPageComponent', () => {
  let component: TransfertArgentsPageComponent;
  let fixture: ComponentFixture<TransfertArgentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertArgentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertArgentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
