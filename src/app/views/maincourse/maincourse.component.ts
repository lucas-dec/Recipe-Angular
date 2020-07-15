import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'
import { Recipe } from '../../models/recipe'

@Component({
  selector: 'app-maincourse',
  templateUrl: './maincourse.component.html',
  styleUrls: ['./maincourse.component.scss']
})
export class MaincourseComponent implements OnInit {

  recipes: Array<Recipe>;
  errorMessage: string
  loadingData: boolean = false

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.loadingData = !this.loadingData
    this.recipesService.getRecipes('main course').subscribe(items => {

      this.recipes = items.recipes;
      this.loadingData = !this.loadingData
    }, error => {
      this.errorMessage = error
      this.loadingData = !this.loadingData
    })
  }

  loadNewRecipes() {
    this.loadingData = !this.loadingData
    this.recipesService.getRecipes('main course').subscribe(items => {
      this.recipes = [...this.recipes, ...items.recipes];
      this.loadingData = !this.loadingData
    }, error => {
      this.errorMessage = error
      this.loadingData = !this.loadingData
    })
  }

}
