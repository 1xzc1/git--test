import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherTestComponentComponent } from './another-test-component.component';

describe('AnotherTestComponentComponent', () => {
  let component: AnotherTestComponentComponent;
  let fixture: ComponentFixture<AnotherTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherTestComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
