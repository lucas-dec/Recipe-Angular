import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service'
import { ActivatedRoute } from '@angular/router';
import { SearchRecipes } from '../../models/search-recipes'
import { SearchResult } from '../../models/search-result'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  recipes: SearchResult[];
  errorMessage: string;

  constructor(private recipeServices: RecipesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let search
    this.route.paramMap.subscribe(params => {
      search = params.get('search')
    })
    this.recipeServices.searchRecipes(search).subscribe(recipes => {
      if (recipes.totalResults === 0) {
        this.errorMessage = `Sorry, we can't find recipe like: "${search}". Please check and insert name of recipe one more time.`
      }
      this.recipes = recipes.results
    }, error => {
      this.errorMessage = error
    })
  }
}
