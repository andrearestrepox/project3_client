
import display from '../assets/img/Untitled design (1).png'
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <div className='opentxt'>
              <h1 className='opentitle'>Join Mom Meet Up to <br/>meet moms like you</h1>
              <p className='openpar'>Connect with moms who are at a similar stage in life and build your tribe - <br/>we know it takes a village, why not choose yours? </p>
            </div>
            <div>
              <img className='openimg' src={display}/>
            </div>
            <div>
             <Link className="signbtn" to={"/signup"}>Join Mom Meet Up</Link>
            </div>
        


        </div>
    );
}

export default HomePage;