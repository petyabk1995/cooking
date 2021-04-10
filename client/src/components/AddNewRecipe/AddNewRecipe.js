// import * as petsService from '../../services/petsService';
import firebase from 'firebase';

const AddRecipe = ({
    history
}) => {

    const onCreatePetSubmitHandler = (e) => {
        e.preventDefault();

        const db = firebase.firestore();
        const { name, recipe, imageURL, category, origin } = e.target;

        db.collection("recipes").add({
            name: name.value,
            recipe: recipe.value,
            imageURL: imageURL.value,
            category: category.value,
            origin: origin.value
        })
            .then((addRecipe) => {
                console.log("Recipe created");
                history.push('/')

            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    return (
        <section className="create">
            <form onSubmit={onCreatePetSubmitHandler}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="name">Origin</label>
                        <span className="input">
                            <input type="text" name="origin" placeholder="Origin" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Recipe</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="recipe" id="description"
                                placeholder="Description"></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
                            <span className="actions"></span>
                        </span>
                    </p>
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
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>

        </section>
    )
}

export default AddRecipe;