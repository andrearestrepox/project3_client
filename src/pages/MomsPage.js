import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { container } from "react-bootstrap"
import jengarner from '../assets/img/jengarner.webp'


const API_URL = process.env.REACT_APP_API_URL;


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
        <h1 className="H1Mom">Moms Page</h1>
         {moms && moms.map(( moms, index) => {
            console.log(moms)
            console.log(moms.profileId)
            return (
                <container>
                <div className="MomProfileCard">


                <img className="prof-pic"src={jengarner}/>
               <h1 className="MomName">{moms.name}</h1>
               {moms.profileId &&<p className="MomBio">{moms.profileId.bio}</p>}
              

               {moms.profileId && <Link to={`/individual-profile/${moms.profileId._id }`}  moms={moms} className="LinkMomPage">
               See More
               </Link>}

              
               </div>

                </container>
            )
         })} 

        </div>
    )
}



export default MomsPage;