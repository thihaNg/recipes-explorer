import { useParams } from 'react-router-dom'
import Styles from './RecipeByCategory.module.css'
import { useGetRecipesByCategory } from '../../../api/useGetRecipesByCategory'
import RecipeList from '../../recipe-list/RecipeList'

const DEFAULT_CAT = 'Miscellaneous'

const RecipeByCategory: React.FC = () => {

  const { name } = useParams()
  const {
    recipes,
    isLoading,
    isError
  } = useGetRecipesByCategory(name ? name : DEFAULT_CAT)

  return (
    <div
      className={`${Styles.container}`}>
      <RecipeList
        title={name ? name : DEFAULT_CAT}
        recipes={recipes} />
    </div>
  )
}

export default RecipeByCategory