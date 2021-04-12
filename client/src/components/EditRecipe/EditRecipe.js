
import firebase from 'firebase';
import { useState, useEffect } from 'react';
import RecipeDetails from '../RecipeDetails/RecipeDetails';


const EditRecipe = ({
    match,
    history
}) => {

    const db = firebase.firestore();

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

    const onDescriptionSaveSubmit = (e) => {
        e.preventDefault();

        db.collection("recipes")
            .doc(recipeId)
            .set({
                recipe: e.target.recipe.value,
                name: recipe.name,
                origin: recipe.origin,
                imageURL: recipe.imageURL,
                category: recipe.category,
                likes: recipe.likes,
                id: recipeId
            })
            .then(() => {
                console.log('Recipe updated!');
                history.push('/cookbook')
            })
    }

    const onDescriptionChangeHandler = () => {
        //need to finish logic if errors
    }

    return (
        <section className="detailsMyPet">
            <h3>{recipe.name}</h3>
            <p>Origin: <i className="fas fa-heart"></i>{recipe.origin}</p>
            <p className="img"><img src={recipe.imageURL} /></p>
            <form onSubmit={onDescriptionSaveSubmit}>
                <textarea type="text" name="recipe" defaultValue={recipe.recipe} onBlur={onDescriptionChangeHandler}></textarea>
                {/* <InputError>{errorMessage}</InputError> */}
                <button className="button">Save</button>
            </form>
        </section>
    )
}
export default EditRecipe;