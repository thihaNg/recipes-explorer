import { useEffect, useState } from "react";
import { BASE_URL, mapRecipeRawToRecipe } from ".";
import { Ingredient, RecipeDetail, RecipeDetailRaw, RecipeDetailResponse } from "../models/Recipe";
import axios from "axios";

const URL = BASE_URL + 'lookup.php?i='

export const useGetRecipeDetail = (id: string) => {
  const [recipe, setRecipe] = useState<RecipeDetail>()
  const [isLoading, setIsLoading]  = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get<RecipeDetailResponse>(URL + id)
      .then(response => {
        if (response.data.meals && response.data.meals.length > 0)
          setRecipe(mapDetailRawToDetail(response.data.meals[0]))
      })
      .catch(error => {

      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [id])

  return { recipe, isLoading }
}

const mapDetailRawToDetail = (raw: RecipeDetailRaw): RecipeDetail => {

  const youtubeId = raw.strYoutube ? (raw.strYoutube.split('watch?v=').length >= 2 ? raw.strYoutube.split('watch?v=')[1] : '') : ''
  const instructions = raw.strInstructions ? raw.strInstructions.replaceAll('\r\n', '').split('.') : []
  const ingredients: Ingredient[] = []

  ingredients.push({
    label: raw.strIngredient1,
    measurement: raw.strMeasure1
  })
  ingredients.push({
    label: raw.strIngredient2,
    measurement: raw.strMeasure2
  })
  ingredients.push({
    label: raw.strIngredient3,
    measurement: raw.strMeasure3
  })
  ingredients.push({
    label: raw.strIngredient4,
    measurement: raw.strMeasure4
  })
  ingredients.push({
    label: raw.strIngredient5,
    measurement: raw.strMeasure5
  })
  ingredients.push({
    label: raw.strIngredient6,
    measurement: raw.strMeasure6
  })
  ingredients.push({
    label: raw.strIngredient7,
    measurement: raw.strMeasure7
  })
  ingredients.push({
    label: raw.strIngredient8,
    measurement: raw.strMeasure8
  })
  ingredients.push({
    label: raw.strIngredient9,
    measurement: raw.strMeasure9
  })
  ingredients.push({
    label: raw.strIngredient10,
    measurement: raw.strMeasure10
  })
  ingredients.push({
    label: raw.strIngredient11,
    measurement: raw.strMeasure11
  })
  ingredients.push({
    label: raw.strIngredient12,
    measurement: raw.strMeasure12
  })
  ingredients.push({
    label: raw.strIngredient13,
    measurement: raw.strMeasure13
  })
  ingredients.push({
    label: raw.strIngredient14,
    measurement: raw.strMeasure14
  })
  ingredients.push({
    label: raw.strIngredient15,
    measurement: raw.strMeasure15
  })
  ingredients.push({
    label: raw.strIngredient16,
    measurement: raw.strMeasure16
  })
  ingredients.push({
    label: raw.strIngredient17,
    measurement: raw.strMeasure17
  })
  ingredients.push({
    label: raw.strIngredient18,
    measurement: raw.strMeasure18
  })
  ingredients.push({
    label: raw.strIngredient19,
    measurement: raw.strMeasure19
  })
  ingredients.push({
    label: raw.strIngredient20,
    measurement: raw.strMeasure20
  })
  // const validateIngredient = (ingredient: string, measurement: string): Ingredient | null => {

  //   if (ingredient && measurement)
  //     return ({
  //       label: ingredient,
  //       measurement
  //     })

  //   return null
  // }

  // for (let i = 1; i < 21; i++) {
  //   const keyIngredient: keyof RecipeDetailRaw = `strIngredient${i}`
  //   const keyMeasurement: keyof RecipeDetailRaw = `strMeasurement${i}`
  //   const ingredient = validateIngredient(raw[keyIngredient], raw[keyMeasurement])

  //   if (ingredient) {
  //     ingredients.push(ingredient)
  //   }
  // }

  return ({
    ...mapRecipeRawToRecipe(raw),
    youtubeId,
    instructions: instructions.filter(instruction => instruction !== ''),
    ingredients: ingredients.filter(ingredient => ingredient.label !== '')
  })

}