import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";


function Navbar() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
     return (
        <nav className="NavBar">

        <a href="/" className="app-name">
       <h1>Mom Meet Up</h1> 
         </a>



        <Link to="/" className="NavButton">Home</Link>

        <Link to='/users' className="NavButton">Meet Moms</Link>



        {isLoggedIn && (
            <>
            <Link to="/edit-profile" className="NavButton">Edit Profile</Link>
            </>
        )}
     
        
        {isLoggedIn && (
            <>
                <button className="NavButton" onClick={logOutUser}>Logout</button>
                <span className="NavButton1">{user && user.name}</span>
            </>
        )}

        {!isLoggedIn && (
            <>
            <Link to="/signup" className="NavButton">Sign up</Link>
            <Link to="/login" className="NavButton"> Login </Link>
            </>
        )}

        </nav>
    
        );
}

export default Navbar;
