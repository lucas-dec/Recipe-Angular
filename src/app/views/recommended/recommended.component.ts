import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'
import { Recipe } from '../../models/recipe'
@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  recipes: Recipe[];
  errorMessage: string;

  constructor(private recipeServices: RecipesService) { }

  ngOnInit(): void {
    this.recipeServices.getRecommendedRecipes().subscribe(items => {
      this.recipes = items.recipes
    }, error => {
      this.errorMessage = error
    })
  }

}
