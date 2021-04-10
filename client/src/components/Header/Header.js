import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({
    isAuthenticated,
    email
}) => {

    return (
        <header id="site-header">
            <nav className="navbar">

                <section className="navbar-dashboard">

                    <div className="third-bar">
                        <Link to="/">Cooking the World</Link>
                    </div>
                    <div className="first-bar">
                        <Link to="/cookbook">cookbook</Link>
                        {/* <a href="#">My recipes</a> */}
                        <Link to="#">add New recipe</Link>
                    </div>
                    <div className="second-bar">
                        <ul>
                            {isAuthenticated
                                ? <li>Welcome, {email}!</li>
                                : <li>Welcome!</li>
                            }
                            {isAuthenticated
                                ? <li><Link to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
                                : <li>
                                    <Link to="/register"><i className="fas fa-user-plus"></i> Register</Link>
                                </li>
                            }

                            {isAuthenticated
                            ? <li></li>
                            : <li>
                                    <Link id="login" to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link>
                                </li>
                            }

                            {/* <li><Link to="#"><i className="fas fa-sign-out-alt"></i> Logout</Link></li> */}
                        </ul>

                    </div>
                </section>

            </nav>
        </header>
    )
}

export default Header;