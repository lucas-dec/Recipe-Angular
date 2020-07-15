import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'
import { Recipe } from '../../models/recipe'

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.scss']
})
export class SaladComponent implements OnInit {

  recipes: Array<Recipe>;
  errorMessage: string
  loadingData: boolean = false

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.loadingData = !this.loadingData
    this.recipesService.getRecipes('salad').subscribe(items => {

      this.recipes = items.recipes;
      this.loadingData = !this.loadingData
    }, error => {
      this.errorMessage = error
      this.loadingData = !this.loadingData
    })
  }

  loadNewRecipes() {
    this.loadingData = !this.loadingData
    this.recipesService.getRecipes('salad').subscribe(items => {
      this.recipes = [...this.recipes, ...items.recipes];
      this.loadingData = !this.loadingData
    }, error => {
      this.errorMessage = error
      this.loadingData = !this.loadingData
    })
  }

}
