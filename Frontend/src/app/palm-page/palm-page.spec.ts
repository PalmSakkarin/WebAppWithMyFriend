import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmPage } from './palm-page';

describe('PalmPage', () => {
  let component: PalmPage;
  let fixture: ComponentFixture<PalmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PalmPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
