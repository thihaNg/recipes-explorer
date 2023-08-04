import { useContext } from 'react'
import Styles from './Drawer.module.css'
import { DrawerContext } from './DrawerContext'

type Props = {
  icon?: string
  label: string
  onClick: (label: string) => void
}

const DrawerItem: React.FC<Props> = ({
  icon,
  label,
  onClick,
}) => {

  const selectedMenuItem = useContext(DrawerContext)
  const selected = selectedMenuItem === label

  return (
    <div
      onClick={() => { onClick(label) }}
      className={`${Styles['item-container']} ${selected ? Styles['item-selected'] : ''}`}>
      {
        icon &&
        <img
          style={{
            width: '20px',
            height: '20px'
          }}
          src={icon} />
      }
      <span
        className='regular-16'>
        {label}
      </span>
    </div>
  )
}

export default DrawerItem