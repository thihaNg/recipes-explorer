export type Recipe = {
  id: number | string
  name: string
  image: string
  favorite?: boolean,
  tags?: string[]
}

export type RecipeRaw = {
  idMeal: string,
  strMeal: string,
  strMealThumb: string,
  strCategory?: string,
  strArea?: string,
  strTags?: string
}

export type RecipesResponse = {
  meals: RecipeRaw[]
}