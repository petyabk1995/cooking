import './RecipeDetails.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import firebase from 'firebase';


const db = firebase.firestore();

const RecipeDetails = ({
    match,
    history
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

    const onPetButtonClickHandler = (e) => {
        let increasedLikes = recipe.likes + 1;
        console.log(e.target)
        
        db.collection("recipes")
            .doc(recipeId)
            .set({
                recipe: recipe.recipe,
                name: recipe.name,
                origin: recipe.origin,
                imageURL: recipe.imageURL,
                category: recipe.category,
                likes: Number(increasedLikes),
                id: recipeId
            })
            .then(() => {
                console.log('Like added');
                history.push(`/recipe/${recipeId}`)
            })

    }

    return (
        <section className="detailsOtherPet">
            <h3>{recipe.name}</h3>
            <p>

                <button id="likeButton" className="button" onClick={onPetButtonClickHandler}>
                    <i className="fas fa-heart"></i>
                    Like me
                </button>

            </p>
            <p className="img"><img src={recipe.imageURL} /></p>
            <p className="description">{recipe.recipe}</p>
            <div class="pet-info">
                <Link to={`/recipe/${recipe.id}/edit`}><button className="button">Edit</button></Link>
                <Link to={`/recipe/${recipe.id}/delete`}><button className="button" >Delete</button></Link>
            </div>
        </section>
    )
}
export default RecipeDetails;