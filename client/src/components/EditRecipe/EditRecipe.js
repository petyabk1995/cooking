
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

        // // To update age and favorite color:
        // db.collection("users").doc("frank").update({
        //     "age": 13,
        //     "favorites.color": "Red"
        // })
        //     .then(() => {
        //         console.log("Document successfully updated!");
        //     });

    }

    // const onDescriptionSaveSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(e.target)

    //     let updatedPet = {...pet, description: e.target.description.value}

    //     petsService.update(match.params.petId, updatedPet)
    //         .then(() => {
    //             history.push(`/pets/details/${match.params.petId}`);
    //             return;
    //         });
    // };


    const onDescriptionChangeHandler = () => {

    }

    return (
        <section className="detailsMyPet">
            <h3>{recipe.name}</h3>
            <p>Origin: <i className="fas fa-heart"></i>{recipe.origin}</p>
            <p className="field">
                <label htmlFor="category">Category</label>
                <span className="input">
                    <select type="text" name="category">
                        <option value="appetizers">Appetizers</option>
                        <option value="salads">Salads</option>
                        <option value="mains">Mains</option>
                        <option value="desserts">Desserts</option>
                    </select>
                    <span className="actions"></span>
                </span>
            </p>
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