import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadNewRecipesComponent } from './load-new-recipes.component';

describe('LoadNewRecipesComponent', () => {
  let component: LoadNewRecipesComponent;
  let fixture: ComponentFixture<LoadNewRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadNewRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadNewRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
