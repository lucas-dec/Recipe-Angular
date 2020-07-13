import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'
import { Recipes } from '../../models/recipes'

@Component({
  selector: 'app-maincourse',
  templateUrl: './maincourse.component.html',
  styleUrls: ['./maincourse.component.scss']
})
export class MaincourseComponent implements OnInit {

  recipes: Array<Recipes>;
  errorMessage: string

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.getRecipes('main course').subscribe(items => {
      this.recipes = items
    }, error => {
      this.errorMessage = error
    })

  }

}
