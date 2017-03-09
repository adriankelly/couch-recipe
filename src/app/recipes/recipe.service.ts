import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Http, Response, RequestOptions, Request, Headers } from '@angular/http';
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
  
  updateRating(recipe: Recipe): Observable<Recipe[]> {
        // console.log('updateRating ==>', recipe.value)
        let bodyString = JSON.stringify(recipe.value);
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers });

    return this.http.put('http://localhost:5984' + `${this.recipesUrl}/${recipe.id}`, bodyString, options)
                             .map((res:Response) => res.json())

                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
