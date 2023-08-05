import { useEffect, useRef, useState } from 'react'
import Styles from './RecipeDetail.module.css'
import Instructions from '../../../instructions/Instructions'
import Ingredients from '../../Ingredients/Ingredients'
import { useParams } from 'react-router-dom'
import { useGetRecipeDetail } from '../../../api/useGetRecipeDetail'
import LoadingScreen from '../../loading/LoadingScreen'

const MOCK_TAGS = ['British', 'Dessert', 'Pie', 'Beef', 'Breakfast', 'So Good']
const MOCK_INSTRUCTIONS = [
  'Preheat the oven to 150C/300F/Gas 2.',
  'Toss the beef and flour together in a bowl with some salt and black pepper.',
  'Heat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.',
  'Fry until browned on each side, then remove and set aside. ',
  'Repeat with the remaining oil and beef.Return the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.',
  'Cover with a lid and place in the oven for two hours.',
  'Remove from the oven, check the seasoning and set aside to cool. ',
  'Enjoy!!!',

]
const MOCK_INGREDENTS = [
  {
    label: 'Beef',
    measurement: '1kg'
  },
  {
    label: 'Plain Flour',
    measurement: '2 tbs'
  },
  {
    label: 'Rapeseed Oil',
    measurement: '2 tbs'
  },
  {
    label: 'Red Wine',
    measurement: '200ml'
  },
  {
    label: 'Beef Stock',
    measurement: '400ml'
  },
  {
    label: 'Onion',
    measurement: '1 finely sliced'
  },
  {
    label: 'Carrots',
    measurement: '3 sprigs'
  },
  {
    label: 'Thyme',
    measurement: '3 sprigs'
  },
]

const RecipeDetail: React.FC = () => {

  const iFrameRef = useRef<HTMLIFrameElement>(null)
  const [iFrameWidth, setIFrameWidth] = useState(0)
  const mediaHeight = iFrameWidth * 0.5625
  const { recipeId } = useParams()
  const {
    recipe,
    isLoading
  } = useGetRecipeDetail(recipeId ? recipeId : '')

  console.log('RecipeID', recipeId)

  useEffect(() => {

    const updateIFrameWidth = () => {
      if (iFrameRef.current) {
        setIFrameWidth(iFrameRef.current.offsetWidth)
      }
    }

    updateIFrameWidth()

    if (window !== undefined) {
      window.addEventListener('resize', updateIFrameWidth)
    }

    return () => {
      if (window !== undefined) {
        window.removeEventListener('resize', updateIFrameWidth)
      }
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div
      className={`${Styles.container}`}>
      <div
        className={`${Styles['recipe-detail-container']}`}>
        <span
          className={`bold-20 ${Styles['recipe-name']}`}>{recipe?.name}</span>
        <div
          className={`${Styles['tags-container']}`}>
          {
            recipe?.tags && recipe?.tags.map(tag => (
              <span
                className={`regular-16 ${Styles['tag-item']}`}>
                {`#${tag}`}
              </span>
            ))
          }
        </div>
        <iframe
          ref={iFrameRef}
          height={mediaHeight}
          width='100%'
          src={`https://www.youtube.com/embed/${recipe?.youtubeId}`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Embedded youtube" />
        <div
          className={`${Styles['description-container']}`}>
          <Instructions
            instructions={recipe?.instructions ? recipe?.instructions : []} />
          <div
            style={{
              width: '32px'
            }}></div>
          <Ingredients
            ingredients={recipe?.ingredients ? recipe?.ingredients : []} />
        </div>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '32px'
          }}>
          <span
            className={`bold-20 ${Styles.result}`}>Result</span>
          <img
            style={{
              height: '300px',
              width: '300px',
              borderRadius: '4px',
              marginTop: '16px'
            }}
            src={recipe?.image} />
        </div>
        {/* <div
          style={{
            width: '100%',
            height: '1px',
            margin: '32px 0px',
            backgroundColor: 'var(--color-secondary)'
          }}></div> */}
      </div>
    </div>
  )
}

export default RecipeDetail