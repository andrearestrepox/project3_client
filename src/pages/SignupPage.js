import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";


function SignupPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (event) => setEmail(event.target.value);
    const handlePassword = (event) => setPassword(event.target.value);
    const handleName = (event) => setName(event.target.value);

    const handleSignupSubmit = (event) => {
        event.preventDefault();

        const requestBody = { email, password, name };

        axios.post(`${API_URL}/auth/signup`, requestBody)
        .then((response) => {
            console.log(response)
            navigate("/login");
        })
        .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
        })
    };

    return (
        <div className="SignupPage">
        <h1>Sign Up</h1>

        <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <div><input className="SignInput" type="email" name="email" value={email} onChange={handleEmail} /></div>

        <label>Password:</label>
        <div><input className="SignInput"  type="password" name="password" value={password} onChange={handlePassword}/></div>

        <label>Name:</label>
        <div><input className="SignInput"  type="text" name="name" value={name} onChange={handleName} /></div>

        <button className="SignButton" type="submit">Sign Up</button>
        </form>

        { errorMessage && <p className="error-message">{errorMessage}</p> }
        
        <p>Already have account?</p>
        <Link className="LogBtn" to={"/login"}> Login</Link>



        </div>
    )
}

export default SignupPage;