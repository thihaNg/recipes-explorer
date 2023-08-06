import Styles from './Instructions.module.css'

type Props = {
  instructions: string[]
}

const Instructions: React.FC<Props> = ({
  instructions
}) => {
  return (
    <div
      className={`${Styles['instructions-container']}`}>
      <span
        className={`bold-16`}>Instructions</span>
      {
        instructions.map((instruction, index) => (
          <InstructionRow
            key={index}
            label={instruction}
            index={index + 1}/>
        ))
      }
    </div>
  )
}

type RowProps = {
  index: number
  label: string
}

const InstructionRow: React.FC<RowProps> = ({
  index,
  label
}) => {
  return (
    <div
      className={`${Styles['row-container']}`}>
      <span
        className={`bold-16 ${Styles.index}`}>{index}</span>
      <span
        className={`regular-16 ${Styles.label}`}>{label}</span>
    </div>
  )
}

export default Instructions