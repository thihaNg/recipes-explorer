import { useEffect, useState } from "react";
import { BASE_URL } from ".";
import { CategoriesResponse, Category } from "../models/Category";
import axios from "axios";

const URL = BASE_URL + 'categories.php'

export const useGetCategories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    axios.get<CategoriesResponse>(URL)
      .then(response => {
        setCategories(response.data.categories.map(category => ({
          id: category.idCategory,
          name: category.strCategory
        })))
      })
      .catch(err => {

      })
  }, [])

  return { categories }
}