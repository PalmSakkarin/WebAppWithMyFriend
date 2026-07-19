import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluemPage } from './pluem-page';

describe('PluemPage', () => {
  let component: PluemPage;
  let fixture: ComponentFixture<PluemPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PluemPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
