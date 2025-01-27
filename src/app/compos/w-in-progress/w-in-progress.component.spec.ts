import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WInProgressComponent } from './w-in-progress.component';

describe('WInProgressComponent', () => {
  let component: WInProgressComponent;
  let fixture: ComponentFixture<WInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WInProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
