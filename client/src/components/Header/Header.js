import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header id="site-header">
            <nav className="navbar">

                <section className="navbar-dashboard">
                    
                    <div className="third-bar">
                        <a href="/">Cooking the World</a>
                    </div>
                    <div className="first-bar">
                        <Link to="/cookbook">cookbook</Link>
                        {/* <a href="#">My recipes</a> */}
                        <a href="#">add New recipe</a>
                    </div>
                    <div className="second-bar">
                        {/* <ul>
                            <li>Welcome, Guest!</li>
                            <li><a href="#"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                        </ul> */}
                        <ul>
                            <li><a href="#"><i className="fas fa-user-plus"></i> REGISTER</a></li>
                            <li><a href="#"><i className="fas fa-sign-in-alt"></i> LOGIN</a></li>
                        </ul>
                    </div>
                </section> 

            </nav>
        </header>
    )
}

export default Header;