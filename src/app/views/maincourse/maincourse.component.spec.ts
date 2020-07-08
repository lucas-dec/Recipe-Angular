import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincourseComponent } from './maincourse.component';

describe('MaincourseComponent', () => {
  let component: MaincourseComponent;
  let fixture: ComponentFixture<MaincourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
