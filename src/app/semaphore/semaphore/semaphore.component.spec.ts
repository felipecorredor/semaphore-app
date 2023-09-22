import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaphoreComponent } from './semaphore.component';

describe('SemaphoreComponent', () => {
  let component: SemaphoreComponent;
  let fixture: ComponentFixture<SemaphoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemaphoreComponent]
    });
    fixture = TestBed.createComponent(SemaphoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
