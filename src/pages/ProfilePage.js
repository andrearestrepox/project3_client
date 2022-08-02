import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005"


function ProfilePage(props) {
    const { user } = useContext(AuthContext);



const handleUserProfileSubmit = (event) => {
event.preventDefault();

}

return(
<div className="UserProfile"> 
<h1>Edit Profile</h1>
{user && (<div>
<p>{user.email}</p>
<p>{user.profileId ? "Profile" : "Profile Incomplete"}</p>
</div>)}

<form onSubmit={handleUserProfileSubmit}>

{/* Add images using cloudinary */}

<div className="ProfilePicture"><h2><label>My Photos</label></h2></div>

<label>Age</label>
<div><input type="number"/></div>

<label>My Bio</label>
<div><textarea /></div>

   <h2><label>My Work</label></h2> 

    <div></div>

    <label> Title
   <div><input /></div>
    </label>
    <label> Company
    <div></div> <input />
    </label>


    <h2><label>Profile Prompts</label></h2>

<b><p>You can add up to five Profile Prompts to your profile</p></b>

    
    <p>Prompt One</p>
    
            <select>
                <option value="question">Are you a dog person?</option>
                <option value="question">Are you usually late?</option>
                <option selected value="question">What is your parenting style?</option>
                <option value="question">America's favorite single mom?</option>
                <option value="question">What are your thoughts on gentle parenting?</option>
            </select>


        <div><textarea /></div>


    <p>Prompt Two</p>
   
    <select>
                <option value="question">Are you a dog person?</option>
                <option value="question">Are you usually late?</option>
                <option selected value="question">What is your parenting style?</option>
                <option value="question">America's favorite single mom?</option>
                <option value="question">What are your thoughts on gentle parenting?</option>
            </select>

   
   
   
    <div><textarea /></div>

    <p>Prompt Three</p>
    <select>
                <option value="question">Are you a dog person?</option>
                <option value="question">Are you usually late?</option>
                <option selected value="question">What is your parenting style?</option>
                <option value="question">America's favorite single mom?</option>
                <option value="question">What are your thoughts on gentle parenting?</option>
            </select>


    <div><textarea /></div>

    <p>Prompt Four</p>
    <select>
                <option value="question">Are you a dog person?</option>
                <option value="question">Are you usually late?</option>
                <option selected value="question">What is your parenting style?</option>
                <option value="question">America's favorite single mom?</option>
                <option value="question">What are your thoughts on gentle parenting?</option>
            </select>




    <div><textarea /></div>

    <p>Prompt Five</p>

    <select>
                <option value="question">Are you a dog person?</option>
                <option value="question">Are you usually late?</option>
                <option selected value="question">What is your parenting style?</option>
                <option value="question">America's favorite single mom?</option>
                <option value="question">What are your thoughts on gentle parenting?</option>
            </select>



    <div><textarea /></div>

    
</form>
</div>
)

}

export default ProfilePage;

// const getProfile = () => {

//     const storedToken = localStorage.getItem('authToken');

//     axios
//     .get(
    //     `${API_URL}/user-profile/profile/${profileId}`,
    //     { headers: { Authorization: `Bearer ${storedToken}`} }
    //     )
    //     .then((response) => {
        //         const individualProfile = response.data;
        //         setProfile(individualProfile);
        //     })
        //     .catch((error) => console.log(error));
        // };
        
        // useEffect(() => {
            //     getProfile();
            // }, [] )
            