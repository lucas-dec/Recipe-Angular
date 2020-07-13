import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'
import { Recipes } from '../../models/recipes'

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.scss']
})
export class SaladComponent implements OnInit {

  recipes: Array<Recipes>;
  errorMessage: string;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes('salad').subscribe(items => {
      this.recipes = items
    }, error => {
      this.errorMessage = error
    })
  }

}
