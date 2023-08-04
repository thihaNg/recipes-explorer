import { ChangeEvent } from 'react'
import Styles from './Search.module.css'
import IconSearch from '../../images/icon_search.svg'
import IconClear from '../../images/icon_clear.svg'

type Props = {
  value: string
  onChange: (query: string) => void
  styles?: React.CSSProperties
}

const Search: React.FC<Props> = ({
  value,
  onChange,
  styles
}) => {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div
      style={{
        ...styles
      }}
      className={`${Styles.container}`}>
      <img
        style={{
          width: '20px',
          height: '20px'
        }}
        src={IconSearch} />
      <input
        value={value}
        type='text'
        placeholder='Search recipes ...'
        onChange={handleInputChange} />
      {
        value &&
        <img
          style={{
            width: '18px',
            height: '18px',
            cursor: 'pointer'
          }}
          src={IconClear}
          onClick={() => { onChange('') }} />
      }
    </div>
  )
}

export default Search