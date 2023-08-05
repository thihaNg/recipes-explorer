import { Recipe, RecipeRaw } from "../models/Recipe"

export const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/'

export const mapRecipeRawToRecipe = (raw: RecipeRaw): Recipe => {

  let tags: string[] = []

  if(raw.strArea)
    tags.push(raw.strArea)

  if(raw.strCategory)
    tags.push(raw.strCategory)

  if(raw.strTags) {
    console.log(raw.strTags, raw.strTags.split(','))
    tags = tags.concat(raw.strTags.split(','))
  }

  return ({
    id: raw.idMeal,
    name: raw.strMeal,
    image: raw.strMealThumb,
    tags
  })
}