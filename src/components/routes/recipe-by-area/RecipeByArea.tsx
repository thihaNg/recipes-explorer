import { useParams } from 'react-router-dom'
import RecipeList from '../../recipe-list/RecipeList'
import { useGetRecipesByArea } from '../../../api/useGetRecipesByArea'
import LoadingScreen from '../../loading/LoadingScreen'
import Styles from './RecipeByArea.module.css'

const DEFAULT_AREA = 'American'

const RecipeByArea: React.FC = () => {

  const { name } = useParams()
  const {
    recipes,
    isLoading,
    isError
  } = useGetRecipesByArea(name ? name : DEFAULT_AREA)

  return (
    <div
      className={`${Styles.container}`}>
      {
        !isLoading &&
        <RecipeList
          title={name ? name : DEFAULT_AREA}
          recipes={recipes} />
      }
      {
        isLoading &&
        <LoadingScreen />
      }
    </div>
  )
}

export default RecipeByArea