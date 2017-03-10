import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../recipe';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { RecipeService } from '../recipe.service';

@Component({
  moduleId: module.id,
  templateUrl: 'recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
  recipes: IRecipe[]
  selectedRecipe: IRecipe
  rating: number

  constructor(private recipeService: RecipeService) { }

  ngOnInit() { this.getRecipeData() }

  getRecipeData() {
    this.recipeService
    .getRecipes()
    .subscribe((recipes: IRecipe[]) => {
      this.recipes = recipes.map((recipe) => {
        return recipe;
      });
    });
  }

  selectRecipe(recipe: IRecipe) {
    this.selectedRecipe = recipe
  }

  onNotify(starIndex: number) {
    this.rating = starIndex;
  }

  updateStar(recipe: IRecipe) {
    recipe.value.rating = this.rating;
    this.recipeService
    .updateRating(recipe)
    .subscribe(() => {
      this.getRecipeData()
    })
  }
}
