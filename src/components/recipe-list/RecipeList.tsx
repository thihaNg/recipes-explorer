import Styles from './RecipeList.module.css'

import { Recipe } from "../../models/Recipe"
import RecipeItem from '../recipe-item/RecipeItem'

type Props = {
  title: string
  recipes: Recipe[]
}

const RecipeList: React.FC<Props> = ({
  title,
  recipes
}) => {
  return (
    <div
      className={`${Styles.container}`}>
      <span
        className="bold-24">
        {`${title} (${recipes.length} recipes)`}
      </span>
      <div
        className={`${Styles['recipe-list']}`}>
        {
          recipes.map(recipe => (
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
              onAddToFavoriteClick={() => { }}
              onRemoveFromFavoriteClick={() => { }} />
          ))
        }
      </div>
    </div>
  )
}

export default RecipeList