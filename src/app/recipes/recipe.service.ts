import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class RecipeService {
  private recipesUrl = '/api/recipe';

  constructor(private http: Http) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get(this.recipesUrl)
                .map((response: Response) => <Recipe[]> response.json())
                .catch(this.handleError);
  }
  
  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
