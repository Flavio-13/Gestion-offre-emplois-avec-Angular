import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionHomeComponent } from './inscription-home.component';

describe('InscriptionHomeComponent', () => {
  let component: InscriptionHomeComponent;
  let fixture: ComponentFixture<InscriptionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
