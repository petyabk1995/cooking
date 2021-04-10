import './Cookbook.css';

const Cookbook = () => {

    return (
        <section className="cookbook">
        <h1>Cookbook</h1>
        <nav className="navbar">
            <ul>
                <li><a href="#">Appetizers</a></li>
                <li><a href="#">Salads</a></li>
                <li><a href="#">Mains</a></li>
                <li><a href="#">Desserts</a></li>
            </ul>
        </nav>
        <ul className="other-pets-list">
            <li className="otherPet">
                <h3>Risotto</h3>
                <p>Origin: Italy</p>
                <p className="img"><img src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d9e73830340c4d2fb0ec5075d8d7d26c/BFV38271_CC2017_11.1.2_FINAL.jpg?output-format=auto&output-quality=auto" /></p>
                {/* <p className="description">This is not my cat Gosho</p> */}
                <div className="pet-info">
                    {/* <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a> */}
                    <a href="/recipe"><button className="button">Recipe</button></a>
                    {/* <i className="fas fa-heart"></i> <span> 2</span> */}
                </div>
            </li>
        </ul>
    </section>
    )
}
export default Cookbook;