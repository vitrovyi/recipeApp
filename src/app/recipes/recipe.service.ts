import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A boorger',
      'This is the simply description',
      'https://media.defense.gov/2011/Feb/04/2000288219/780/780/0/110201-F-6881R-001.JPG',
      [
        new Ingredient('meat', 3),
        new Ingredient('French Fries', 1)
      ]
    ),

    new Recipe(
      'The fried meat',
      'This is the description',
      'https://media.defense.gov/2011/Feb/04/2000288219/780/780/0/110201-F-6881R-001.JPG',
      [
        new Ingredient('meat', 3),
        new Ingredient('Selt', 3)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    // to return copy of origin array of recipes
    return this.recipes.slice();
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
