import {auth} from '../../config/firebase';
import './Register.css';

const Register = ({
    history,
}) => {

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log('Registered')
          history.push("/");
        })
        .catch((error) => console.log(error));

    }

    return ( 
        <section className="register">
        <form onSubmit={onRegisterSubmitHandler}>
            <fieldset>
                <legend>Register</legend>
                <p className="field">
                    <label htmlFor="email">email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="email" />
                        <span className="actions"></span>
                        <i className="fas fa-user"></i>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <span className="actions"></span>
                        <i className="fas fa-key"></i>
                    </span>
                </p>
                <input className="button" type="submit" className="submit" value="Register" />
            </fieldset>
        </form>
    </section>
    )
}

export default Register;