import { useState } from 'react'
import IconFavorite from '../../images/icon_favorite.svg'
import IconFavoriteFilled from '../../images/icon_favorite_filled.svg'
import { Recipe } from '../../models/Recipe'
import Styles from './RecipeItem.module.css'
import { useNavigate } from 'react-router-dom'
import Placeholder from '../../images/recipe_placeholder.png'
import ImageWithPlaceholder from '../image-with-placeholder/ImageWithPlaceholder'

type Props = {
  recipe: Recipe
  onAddToFavoriteClick: (id: number) => void
  onRemoveFromFavoriteClick: (id: number) => void
}

const RecipeItem: React.FC<Props> = ({
  recipe,
  onAddToFavoriteClick,
  onRemoveFromFavoriteClick
}) => {

  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()
  const tags = recipe.tags ? (recipe.tags.length < 3 ? recipe.tags : recipe.tags.slice(0, 2)) : []

  const handleRecipeClick = () => {
    navigate(`/recipe/${recipe.id}`)
  }

  return (
    <div
      onClick={handleRecipeClick}
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseLeave={() => {
        setHovered(false)
      }}
      className={`${Styles.container}`}>
      {
        hovered && recipe.tags && recipe.tags.length !== 0 &&
        <div
          className={`${Styles['tags-container']}`}>
          {
            tags.map((tag, index) => (
              <span
                key={index}
                className='regular-12'>{`#${tag}`}</span>
            ))
          }
        </div>
      }
      {/* <img
        className={`${Styles['recipe-img']}`}
        src={recipe.image} /> */}
      <ImageWithPlaceholder
        placeholderSrc={Placeholder}
        actualSrc={recipe.image}
        alt='Recipe'
        styles={{
          borderRadius: '6px'
        }}/>
      <div
        className={`${Styles['recipe-info']}`}>
        <span
          className='regular-16'>
          {recipe.name}
        </span>
        <img
          style={{
            width: '20px',
            height: '20px'
          }}
          src={recipe.favorite ? IconFavoriteFilled : IconFavorite} />
      </div>
    </div>
  )
}

export default RecipeItem