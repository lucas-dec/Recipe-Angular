import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Recipes } from '../models/recipes';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private apiKey: string = 'bff6f87cb12a492ab3b79fcdc277e1c8';

  constructor(private http: HttpClient) { }


  getRecommendedRecipes(): Observable<Recipes[]> {
    const apiUrl: string = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${this.apiKey}`;
    return this.http.get<Recipes[]>(apiUrl).pipe(catchError(this.handleError))
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err.error.message || "Server Error")
  }
}
