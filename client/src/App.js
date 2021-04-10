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

import { useState, useEffect } from 'react';

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
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;
