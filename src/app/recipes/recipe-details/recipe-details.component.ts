import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html'
})

export class RecipeDetailsComponent {
  @Input() recipe: Recipe;

  imageWidth: number = 500;
  imageMargin: number = 2;

  // constructor(private recipeService: RecipeService) { }

}
