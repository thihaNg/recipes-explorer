import { Ingredient } from "../../models/Recipe"
import Styles from './Ingredients.module.css'

type Props = {
  ingredients: Ingredient[]
}

const Ingredients: React.FC<Props> = ({
  ingredients
}) => {
  return (
    <table
      className={`${Styles.table}`}>
      <thead>
        <tr>
          <th
            className={`${Styles.th}`}>Items</th>
          <th
            className={`${Styles.th}`}>Measurements</th>
        </tr>
      </thead>
      <tbody>
        {
          ingredients.map((ingredient, index) => (
            <tr
              key={index}>
              <td
                className={`medium-16 ${Styles.label} ${Styles.td}`}>{ingredient.label}</td>
              <td
                className={`regular-16 ${Styles.measurement} ${Styles.td}`}>{ingredient.measurement}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Ingredients