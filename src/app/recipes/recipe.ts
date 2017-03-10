export interface IRecipe {
  id: string;
  rev: string;
  key: string;
  value: {
    name: string;
    description: string;
    ingredients: string[];
    calories: string;
    carbos: string;
    fats: string;
    proteins: string;
    rating: number;
  }
}