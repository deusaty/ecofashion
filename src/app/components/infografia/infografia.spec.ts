import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infografia } from './infografia';

describe('Infografia', () => {
  let component: Infografia;
  let fixture: ComponentFixture<Infografia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infografia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infografia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
