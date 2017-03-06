export class Recipe {
  id?: string;
  key: string;
  value: {
    name: string;
    description: string;
    ingredients: string[];
    calories: string;
    carbos: string;
    fats: string;
    favorites: number;
    proteins: string;
  }
}