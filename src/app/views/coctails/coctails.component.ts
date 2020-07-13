import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'
import { Recipes } from '../../models/recipes'

@Component({
  selector: 'app-coctails',
  templateUrl: './coctails.component.html',
  styleUrls: ['./coctails.component.scss']
})
export class CoctailsComponent implements OnInit {

  recipes: Array<Recipes>;
  errorMessage: string;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.getRecipes('drink').subscribe(items => {
      this.recipes = items
    }, error => {
      this.errorMessage = error
    })
  }

}
