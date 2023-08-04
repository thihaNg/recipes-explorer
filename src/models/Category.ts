export type Category = {
  id: string
  name: string
}

export type CategoryRaw = {
  idCategory: string,
  strCategory: string
}

export type CategoriesResponse = {
  categories: CategoryRaw[]
}