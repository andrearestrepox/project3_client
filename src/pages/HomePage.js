
import display from '../assets/img/Untitled design (1).png'
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
        {/* <div className='DivBlock'> */}
            {/* <h3 className='TextDiv'>
            This is for her. The one who spends countless nights rocking her baby to sleep. The one who wakes up every two hours to feed her new-born. The one who checks for monsters under the bed and behind closet doors. The one who forgets to eat because there is too much to do. This is for you. The you who goes on hot-girl walks after nap time. The you who enjoys a good book over an even better coffee. The you who tells the craziest stories at brunch with the girls. This is for you and for her; for the single moms in South Florida who desire to see a strong, loving community of women making it happen. We know it takes a village, why not choose yours?
           
            </h3> */}
        
            {/* </div> */}
            <div className='opentxt'>
              <h1 className='opentitle'>Join Mom Meet Up to <br/>meet moms like you</h1>
              <p className='openpar'>Connect with moms who are at a similar stage in life and build your tribe - <br/>we know it takes a village, why not choose yours? </p>
            </div>
            <div>
              <img className='openimg' src={display}/>
            </div>
            <div>
            <button className="signBtn" type="submit"> <Link className="signbtn" to={"/signup"}>Join</Link></button>
            </div>
        


        </div>
    );
}

export default HomePage;