import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';


@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[]
  selectedRecipe: Recipe

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService
    .getRecipes()
    .then((recipes: Recipe[]) => {
      this.recipes = recipes.map((recipe) => {
        return recipe;
      });
    });
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe
  }
}
