import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import { auth } from './config/firebase'
import firebase from 'firebase';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Cookbook from './components/Cookbook/Cookbook';
import AddNewRecipe from './components/AddNewRecipe/AddNewRecipe';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import EditRecipe from './components/EditRecipe/EditRecipe';

import { useState, useEffect } from 'react';

const db = firebase.firestore();

function App() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);

    const authInfo = {
        isAuthenticated: Boolean(user),
        email: user?.email
    }

    return (
        <div className="container">
            <Header {...authInfo} />
            <main id="site-content">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" render={props => {
                        auth.signOut();
                        return <Redirect to="/" />
                    }}
                    />
                    <Route path="/cookbook" component={Cookbook} />
                    <Route path="/add-new-recipe" component={AddNewRecipe} />
                    <Route path="/recipe/:recipeId" exact component={RecipeDetails} />
                    <Route path="/recipe/:recipeId/edit" component={EditRecipe} />
                    <Route path="/recipe/:recipeId/delete" render={props => {

                        const recipeId = props.match.params.recipeId;
                        const history = props.history;

                        db.collection("recipes")
                            .doc(recipeId)
                            .delete()
                            .then(() => {
                                console.log("Document successfully deleted!");
                                history.push('/cookbook');
                            }).catch((error) => {
                                console.error("Error removing document: ", error);
                            });
                    }} >
                    </Route>
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;
