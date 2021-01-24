import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInBtn">Sign In</button>
                </form>
                <p>By signing in you agree to our terms and conditions of use. For more information please contact us.</p>
                <button onClick={register} className="login__registerBtn">Create a new account</button>
                <h6 className="login__back">To go back to home click the logo</h6>
            </div>
        </div>
    )
}

export default Login
