import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'rr-recipe-details',
  moduleId: module.id,
  templateUrl: 'recipe-details.component.html'
})

export class RecipeDetailsComponent {
  @Input() recipe: Recipe;

  imageWidth: number = 500;
  imageMargin: number = 2;

}
