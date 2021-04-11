
import firebase from 'firebase';
import { useState, useEffect } from 'react';

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

    const onDescriptionSaveSubmit = () => {

    }

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
                <textarea type="text" name="description" defaultValue={recipe.description} onBlur={onDescriptionChangeHandler}></textarea>
                {/* <InputError>{errorMessage}</InputError> */}
                <button className="button">Save</button>
            </form>
        </section>
    )
}
export default EditRecipe;