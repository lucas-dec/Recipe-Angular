import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Recipes } from '../models/recipes';
import { Recipe } from '../models/recipe'
import { SearchRecipes } from '../models/search-recipes'


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private apiKey: string = 'bff6f87cb12a492ab3b79fcdc277e1c8';

  constructor(private http: HttpClient) { }

  handleError(err: HttpErrorResponse) {
    return throwError(err.error.message || "Server Error")
  }

  getRecommendedRecipes(): Observable<Recipes> {
    const apiUrl: string = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${this.apiKey}`;
    return this.http.get<Recipes>(apiUrl).pipe(catchError(this.handleError))
  }

  getRecipes(category): Observable<Recipes> {
    const apiUrl: string = `https://api.spoonacular.com/recipes/random?number=6&tags=${category}&apiKey=${this.apiKey}`;
    return this.http.get<Recipes>(apiUrl).pipe(catchError(this.handleError))
  }

  getDetailsRecipe(id): Observable<Recipe> {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.apiKey}`;
    return this.http.get<Recipe>(url).pipe(catchError(this.handleError))
  }

  searchRecipes(search): Observable<SearchRecipes> {
    const url = `https://api.spoonacular.com/recipes/search?query=${search}&apiKey=${this.apiKey}`
    return this.http.get<SearchRecipes>(url).pipe(catchError(this.handleError))
  }
}
