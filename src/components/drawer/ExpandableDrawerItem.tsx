import { useState } from 'react'
import Styles from './Drawer.module.css'
import DrawerItem from './DrawerItem'
import IconChevronDown from '../../images/icon_chevron_down.svg'
import IconChevronUp from '../../images/icon_chevron_up.svg'

type Props = {
  icon: string
  title: string
  items: string[]
  onItemClick: (item: string) => void
}

const ExpandableDrawerItem: React.FC<Props> = ({
  icon,
  title,
  items,
  onItemClick
}) => {

  const top3Items = items.length > 3 ? [...items.slice(0, 3)] : [...items]
  const [expanded, setExpanded] = useState(false)

  const itemsToRender = expanded ? items : top3Items

  const toggleExpandCollapse = () => {

    setExpanded(!expanded)

  }

  return (
    <div
      className={`${Styles['expandable-item-container']}`}>
      <div
        onClick={toggleExpandCollapse}
        className={`${Styles['expandable-header']}`}>
        <img
          style={{
            width: '20px',
            height: '20px'
          }}
          src={icon} />
        <span
          className='medium-16'>
          {title}
        </span>
        <img
          className={`${Styles['expand-collapse-btn']}`}
          src={expanded? IconChevronUp : IconChevronDown} />
      </div>
      {
        itemsToRender.map((item, index) => (
          <DrawerItem
            key={item}
            label={item}
            onClick={onItemClick} />
        ))
      }
      {/* <div
        onClick={useToggleExpandCollapse}
        className={`${Styles['expand-collabse-btn']}`}>
        <span
          className={`regular-14`}>
          {`${expanded ? 'Collapse' : 'Expand'} ${title}`}
        </span>
        <img
          style={{
            width: '16px',
            height: '16px'
          }}
          src={expanded ? IconChevronUp : IconChevronDown} />
      </div> */}
    </div>
  )
}

export default ExpandableDrawerItem