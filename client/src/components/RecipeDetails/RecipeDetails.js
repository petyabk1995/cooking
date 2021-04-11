import './RecipeDetails.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import firebase from 'firebase';


const db = firebase.firestore();

const RecipeDetails = ({
    match,
}) => {
    
    let [recipe, setRecipe] = useState({});
    const recipeId = match.params.recipeId;

    useEffect(() => {
        db.collection("recipes")
            .doc(recipeId)
            .get()
            .then((res) => {
                setRecipe({
                    id: recipeId,
                    ...res.data()
                });
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    }, []);

    const onPetButtonClickHandler = () => {

    }

    return(
        <section className="detailsOtherPet">
        <h3>{recipe.name}</h3>
        <p>Pet counter: pet.likes
            
                <button className="button" onClick={onPetButtonClickHandler}>
                    <i className="fas fa-heart"></i>
                    Recipe
            </button>
           
        </p>
        <p className="img"><img src={recipe.imageURL} /></p>
        <p className="description">{recipe.recipe}</p>
        <div class="pet-info">
            <Link to={`/pets/details/${recipe.id}/edit`}><button class="button">Edit</button></Link>
            <Link to="#"><button className="button">Delete</button></Link>
        </div>
    </section>
    )
}
export default RecipeDetails;