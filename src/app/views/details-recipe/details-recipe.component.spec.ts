import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRecipeComponent } from './details-recipe.component';

describe('DetailsRecipeComponent', () => {
  let component: DetailsRecipeComponent;
  let fixture: ComponentFixture<DetailsRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
