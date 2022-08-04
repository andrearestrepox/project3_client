import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";


function Navbar() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
     return (
        <nav className="NavBar">

        <a href="/" className="app-name">
       <h1>MomMeetUp</h1> 
         </a>



        <Link to="/">
            <button className="NavButton">Home</button>
        </Link>

        <Link to='/users'>
            <button className="NavButton">Meet Moms</button>
        </Link>



        {isLoggedIn && (
            <>
            <Link to="/edit-profile">
            <button className="NavButton">Edit Profile</button>
            </Link>
            </>
        )}
     
        
        {isLoggedIn && (
            <>
                <button className="NavButton" onClick={logOutUser}>Logout</button>
                <span className="UserName">{user && user.name}</span>
            </>
        )}

        {!isLoggedIn && (
            <>
            <Link to="/signup"> <button className="NavButton">Sign up</button></Link>
            <Link to="/login"> <button className="NavButton">Login</button></Link>
            </>
        )}

        </nav>
    
        );
}

export default Navbar;
