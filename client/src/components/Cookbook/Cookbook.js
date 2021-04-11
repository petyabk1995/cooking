import './Cookbook.css';
import { Component } from 'react';
import firebase from 'firebase';

import RecipeCard from '../RecipeCard/RecipeCard';
import CookbookNavigation from '../CookbookNavigation/CookbookNavigation';

const db = firebase.firestore();

class Cookbook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            currentRecipe: 'all'
        }
    }

    componentDidMount() {

        db.collection("recipes")
            .get()
            .then((res) => {
                let allRecipes = [];
                res.forEach((recipe) => {
                    allRecipes.push({
                        id: recipe.id,
                        ...recipe.data()
                    });
                    console.log(recipe.id);
                    console.log(allRecipes);
                    this.setState({ recipes: allRecipes });
                });
            });
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;

        if (prevProps.match.params.category == category) {
            return;
        }

        db.collection("recipes")
            .get()
            .then((res) => {
                let allRecipes = [];
                res.forEach((recipe) => {
                    allRecipes.push(recipe.data());
                    this.setState({ recipes: allRecipes });
                });
            });

    }

    render() {
        return (
            <section className="cookbook">
                <h1>Cookbook</h1>
                <CookbookNavigation />
                <ul className="other-pets-list">

                    {this.state.recipes.map(x =>
                        <RecipeCard
                            id={x.id}
                            key={x.id}
                            name={x.name}
                            origin={x.origin}
                            recipe={x.recipe}
                            imageURL={x.imageURL}
                            category={x.category}
                            />
                    )
                    };
                </ul>
            </section>
        )
    }
}
export default Cookbook;