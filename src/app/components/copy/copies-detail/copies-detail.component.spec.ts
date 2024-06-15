import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiesDetailComponent } from './copies-detail.component';

describe('CopiesDetailComponent', () => {
  let component: CopiesDetailComponent;
  let fixture: ComponentFixture<CopiesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopiesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
