import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyVoitureComponent } from './modify-voiture.component';

describe('ModifyVoitureComponent', () => {
  let component: ModifyVoitureComponent;
  let fixture: ComponentFixture<ModifyVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyVoitureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
