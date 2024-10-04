import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVoitureComponent } from './add-voiture.component';

describe('AddVoitureComponent', () => {
  let component: AddVoitureComponent;
  let fixture: ComponentFixture<AddVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVoitureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
