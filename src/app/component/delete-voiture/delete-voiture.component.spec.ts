import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVoitureComponent } from './delete-voiture.component';

describe('DeleteVoitureComponent', () => {
  let component: DeleteVoitureComponent;
  let fixture: ComponentFixture<DeleteVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteVoitureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
