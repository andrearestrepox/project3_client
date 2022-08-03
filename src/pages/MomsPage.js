import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useEffect, useState, useContext } from "react";
import { Link} from "react-router-dom";


const API_URL = "http://localhost:5005"


function MomsPage(props) {
    const { user, storedToken } = useContext(AuthContext);
    console.log(user)

    const [moms, setMoms] = useState(null);

useEffect(() => {
    axios.get(
        `${API_URL}/profile/users`, {headers: {Authorization: `Bearer ${storedToken}`}}
        
    )
    .then((response) => {
        console.log(response.data[1].profileId.bio)
        setMoms(response.data)
    })
    .catch((error) => console.log(error))
}, [])
    return(
        <div className="MomsPage"> 
        <h1>Moms Page</h1>
         {moms && moms.map(( moms, index) => {
            console.log(moms)
            return (
                <div className="MomProfileCard">

               <p className="MomName">{moms.name}</p>
               <p className="MomBio">{moms.profileId.bio}</p>

               <Link to="/individual-profile">
               <a>See More</a>
               </Link>

              
               </div>
            )
         })} 

        </div>
    )
}



export default MomsPage;