import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { RecipeService } from '../recipe.service';

@Component({
  moduleId: module.id,
  templateUrl: 'recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[]
  selectedRecipe: Recipe

  // dependency injection
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService
    .getRecipes()
    .subscribe((recipes: Recipe[]) => {
      this.recipes = recipes.map((recipe) => {
        return recipe;
      });
    });
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe
  }

  onRatingClicked(message: string) {
    console.log(message);
  }
}
