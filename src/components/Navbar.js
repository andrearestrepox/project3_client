import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";


function Navbar() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
     return (
        <nav>
        <Link to="/">
            <button>Home</button>
        </Link>

        <Link to='/users'>
            <button>Meet Moms</button>
        </Link>



        {isLoggedIn && (
            <>
            <Link to="/myprofile">
            <button>Edit Profile</button>
            </Link>
            </>
        )}
     
        
        {isLoggedIn && (
            <>
                <button onClick={logOutUser}>Logout</button>
                <span>{user && user.name}</span>
            </>
        )}

        {!isLoggedIn && (
            <>
            <Link to="/signup"> <button>Sign up</button></Link>
            <Link to="/login"> <button>Login</button></Link>
            </>
        )}

        </nav>
    
        );
}

export default Navbar;
