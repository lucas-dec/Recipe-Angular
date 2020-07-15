import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-new-recipes',
  templateUrl: './load-new-recipes.component.html',
  styleUrls: ['./load-new-recipes.component.scss']
})
export class LoadNewRecipesComponent implements OnInit {

  @Output()
  eventLoadNewRecipes = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  loadNewRecipes() {
    this.eventLoadNewRecipes.emit()
  }

}
