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
  imgRecipe: string;

  constructor(private route: ActivatedRoute, private recipeServices: RecipesService) { }

  ngOnInit(): void {
    let id
    this.route.paramMap.subscribe(params => {
      id = params.get('id')
    })
    this.recipeServices.getDetailsRecipe(id).subscribe(items => {
      this.recipe = items;
      this.imgRecipe = `url(${items.image})`
    }, error => {
      this.errorMessage = error
    })
  }
}
