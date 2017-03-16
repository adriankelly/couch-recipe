import { Injectable } from '@angular/core';
import { IRecipe } from './recipe';
import { Http, Response, RequestOptions, Request, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class RecipeService {
  private recipesUrl = '/api/recipe';

  constructor(private http: Http) { }

  getRecipes(): Observable<IRecipe[]> {
    return this.http.get(this.recipesUrl)
                .map((response: Response) => <IRecipe[]> response.json())
                .catch(this.handleError);
  }
  
  updateRating(recipe: IRecipe): Observable<IRecipe[]> {
        let bodyString = JSON.stringify(recipe.value);
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers });
        let url = 'http://ec2-54-152-93-18.compute-1.amazonaws.com' + `${this.recipesUrl}/${recipe.id}`;
    return this.http.put(url, bodyString, options)
                             .map((res:Response) => res.json())
                            .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
