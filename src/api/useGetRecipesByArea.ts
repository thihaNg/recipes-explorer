import { useEffect, useState } from "react"
import { Recipe, RecipeRaw, RecipesResponse } from "../models/Recipe"
import { BASE_URL, mapRecipeRawToRecipe } from "."
import axios from "axios"

const URL = BASE_URL + 'filter.php?a='

export const useGetRecipesByArea = (area: string) => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    setIsLoading(true)

    axios.get<RecipesResponse>(URL + area)
      .then(res => {
        setRecipes(res.data.meals.map(raw => mapRecipeRawToRecipe(raw)))
      })
      .catch(err => {
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [area])

  return {
    recipes,
    isLoading,
    isError
  }
}