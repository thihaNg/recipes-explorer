import { useParams } from 'react-router-dom'
import RecipeList from '../../recipe-list/RecipeList'
import { useGetRecipesByArea } from '../../../api/useGetRecipesByArea'

const DEFAULT_AREA = 'American'

const RecipeByArea: React.FC = () => {

  const { name } = useParams()
  const {
    recipes,
    isLoading,
    isError
  } = useGetRecipesByArea(name ? name : DEFAULT_AREA)

  return (
    <div>
      <RecipeList
        title={name ? name : DEFAULT_AREA}
        recipes={recipes} />
    </div>
  )
}

export default RecipeByArea