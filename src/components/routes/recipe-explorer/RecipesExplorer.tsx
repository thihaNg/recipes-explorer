import { useState } from "react"
import RecipeList from "../../recipe-list/RecipeList"
import Search from "../../search/Search"
import Styles from './RecipeExplorer.module.css'
import { useSearchRecipes } from "../../../api/useSearchRecipes"

const RecipeExplorer: React.FC = () => {

  const [query, setQuery] = useState('')
  const {
    recipes,
    isLoading,
    isError
  } = useSearchRecipes(query)

  return (
    <div
      className={`${Styles.container}`}>
      <Search
        styles={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '32px'
        }}
        value={query}
        onChange={(query: string) => {
          setQuery(query)
        }} />
      {
        recipes && recipes.length !== 0 &&
        <RecipeList
          title="Search result"
          recipes={recipes} />
      }
    </div>
  )
}

export default RecipeExplorer