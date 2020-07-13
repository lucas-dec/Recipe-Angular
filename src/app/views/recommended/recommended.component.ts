import { Component, OnInit } from '@angular/core';
import { Recipes } from '../../models/recipes'
import { RecipesService } from '../../services/recipes.service'

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  recipes: Array<Recipes>;
  errorMessage: string;

  constructor(private recipeServices: RecipesService) { }

  ngOnInit(): void {
    this.recipeServices.getRecommendedRecipes().subscribe(items => {
      this.recipes = items
    }, error => {
      this.errorMessage = error
    })
  }

}
