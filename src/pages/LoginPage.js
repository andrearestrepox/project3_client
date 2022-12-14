import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;

function LoginPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleEmail = (event) => setEmail(event.target.value);
    const handlePassword = (event) => setPassword(event.target.value);

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const requestBody = { email, password };

        axios.post(`${API_URL}/auth/login`, requestBody)
        .then((response) => {
            console.log("JWT TOKEN ---->", response.data.authToken);

            storeToken(response.data.authToken);
            authenticateUser();
            navigate("/")
        })
        .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription)
        })
    };

    return (

        <div className="LoginPage">
        <h1>Login</h1>

        <form onSubmit={handleLoginSubmit}>
            <label>Email:</label>
           <div><input className="LogInput" type="email" name="email" value={email} onChange={handleEmail}/></div> 

            <label>Password:</label>
            <div><input className="LogInput" type="password" name="password" value={password} onChange={handlePassword}/></div>

            <button className="LogButton" type="submit">Login</button>
        </form>
        { errorMessage && <p className="error-message">{errorMessage}</p> }

        <p>Don't have an account yet?</p>
        <Link to={"/signup"}>Sign up</Link>
        </div>
    )
}


export default LoginPage;