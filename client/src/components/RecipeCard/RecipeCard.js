import { Link } from 'react-router-dom';
import './RecipeCard.css';

const Recipe = ({
    name,
    id,
    origin,
    category,
    imageURL,
    recipe,
    key,
}) => {

    return (
        <li className="otherPet">
            <h3>{name}</h3>
            <p>Origin: {origin}</p>
            <p className="img"><img src={imageURL} /></p>
            <div className="pet-info">
                <Link to={`/recipe/${id}`} ><button className="button">Recipe</button></Link>
            </div>
        </li>
    )
}
export default Recipe;