import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'
import { Recipe } from '../../models/recipe'

@Component({
  selector: 'app-coctails',
  templateUrl: './coctails.component.html',
  styleUrls: ['./coctails.component.scss']
})
export class CoctailsComponent implements OnInit {

  recipes: Array<Recipe>;
  errorMessage: string
  loadingData: boolean = false

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.loadingData = !this.loadingData
    this.recipesService.getRecipes('drink').subscribe(items => {

      this.recipes = items.recipes;
      this.loadingData = !this.loadingData
    }, error => {
      this.errorMessage = error
      this.loadingData = !this.loadingData
    })
  }

  loadNewRecipes() {
    this.loadingData = !this.loadingData
    this.recipesService.getRecipes('drink').subscribe(items => {
      this.recipes = [...this.recipes, ...items.recipes];
      this.loadingData = !this.loadingData
    }, error => {
      this.errorMessage = error
      this.loadingData = !this.loadingData
    })
  }

}
