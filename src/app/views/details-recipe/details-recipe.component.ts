import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service'
import { Recipe } from '../../models/recipe'

@Component({
  selector: 'app-details-recipe',
  templateUrl: './details-recipe.component.html',
  styleUrls: ['./details-recipe.component.scss']
})
export class DetailsRecipeComponent implements OnInit {

  recipe: Recipe
  errorMessage: string;

  constructor(private route: ActivatedRoute, private recipeServices: RecipesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id')
      this.recipeServices.getDetailsRecipe(id).subscribe(items => {
        this.recipe = items
      }, error => {
        this.errorMessage = error
      })
    })
  }
}
