import { Component, Input } from '@angular/core';
import { IRecipe } from '../recipe';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'cr-recipe-details',
  moduleId: module.id,
  templateUrl: 'recipe-details.component.html'
})

export class RecipeDetailsComponent {
  @Input() recipe: IRecipe;

  imageWidth: number = 500;
  imageMargin: number = 2;

}
