import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkbookComponent } from './markbook.component';

describe('MarkbookComponent', () => {
  let component: MarkbookComponent;
  let fixture: ComponentFixture<MarkbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
