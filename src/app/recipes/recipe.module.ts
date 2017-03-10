import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

import { RecipeService } from './recipe.service';

@NgModule({
  declarations: [
    RecipeDetailsComponent,
    RecipeListComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'recipes', component: RecipeListComponent }
    ]),
    FormsModule,
    SharedModule
  ],
  providers: [
    RecipeService
  ]
})

export class RecipeModule {}