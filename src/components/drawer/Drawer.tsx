import Styles from './Drawer.module.css'
import DrawerItem from './DrawerItem'
import IconSearch from '../../images/icon_search.svg'
import IconFavorite from '../../images/icon_favorite.svg'
import IconCategory from '../../images/icon_category.svg'
import IconArea from '../../images/icon_area.svg'
import ExpandableDrawerItem from './ExpandableDrawerItem'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { DrawerContext } from './DrawerContext'
import { useGetCategories } from '../../api/useGetCategories'
import { useGetAreas } from '../../api/useGetAreas'

const LABEL_SEARCH = 'Search Recipes'

const Drawer: React.FC = () => {

  const navigate = useNavigate()
  const [selectedMenuItem, setSelectedMenuItem] = useState('Search Recipes')
  const { categories } = useGetCategories()
  const { areas } = useGetAreas()

  const handleCategoryItemClick = (category: string) => {

    navigate('/category/' + category)
    setSelectedMenuItem(category)

  }

  const handleAreItemClick = (area: string) => {

    console.log('areaItemClick', area)

    navigate('/area/' + area)
    setSelectedMenuItem(area)
  }

  const handleSearchClick = () => {
    navigate('/')
    setSelectedMenuItem(LABEL_SEARCH)
  }

  return (
    <DrawerContext.Provider value={selectedMenuItem}>
      <div
        className={`${Styles['drawer-container']}`}>
        <span
          className='logo'>
          Recipes Explorer
        </span>
        <DrawerItem
          label={LABEL_SEARCH}
          icon={IconSearch}
          onClick={handleSearchClick} />
        <DrawerItem
          label='Favorites'
          icon={IconFavorite}
          onClick={() => { }} />
        <ExpandableDrawerItem
          title='Categories'
          icon={IconCategory}
          items={categories.map(category => category.name)}
          onItemClick={handleCategoryItemClick} />
        <ExpandableDrawerItem
          title='Areas'
          icon={IconArea}
          items={areas.map(area => area.name)}
          onItemClick={handleAreItemClick} />
      </div>
    </DrawerContext.Provider>
  )
}

export default Drawer