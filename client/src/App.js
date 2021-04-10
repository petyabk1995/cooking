import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Cookbook from './components/Cookbook/Cookbook';

function App() {

	return (
		<div className="container">
			<Header />
			<main id="site-content">
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/cookbook" component={Cookbook} />
			</Switch>
			</main>
			<Footer />
		</div>
	);
}

export default App;
