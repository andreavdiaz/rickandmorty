import { Link } from 'react-router-dom'
import styles from "./Character.module.css"

export const Character = (props) => {
  const { id, name, image } = props

  return(
    <Link to={`/characters/${id}`}>
      <section className= {styles.cardCharacter}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
      </section>
  
    </Link>
  )
}