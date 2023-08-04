import { useEffect, useState } from "react"
import { Recipe, RecipeRaw, RecipesResponse } from "../models/Recipe"
import { BASE_URL, mapRecipeRawToRecipe } from "."
import axios from "axios"

const URL = BASE_URL + 'filter.php?c='

export const useGetRecipesByCategory = (category: string) => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    setIsLoading(true)

    axios.get<RecipesResponse>(URL + category)
      .then(res => {
        setRecipes(res.data.meals.map(raw => mapRecipeRawToRecipe(raw)))
      })
      .catch(err => {
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [category])

  return {
    recipes,
    isLoading,
    isError
  }
}