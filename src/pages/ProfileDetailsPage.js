import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MomsPage from "./MomsPage";
import jenimg from '../components/jengarner.webp'


const API_URL = "http://localhost:5005"



function ProfileDetailsPage(props) {
    console.log(props.moms)
    const { profileId } = useParams()
    const [mom, setMom] = useState();
    console.log(profileId)
    useEffect(() => {

        axios.get(
            `${API_URL}/profile/individual-profile/${profileId}`)
            .then((response) => {
                console.log(response)
                setMom(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [profileId])



    return (

        <div className="ProfDiv">
            <div><h1>User Profile Details</h1></div>

            {mom && (
                <>
                <img  className="DetailsImg" src={jenimg} alt= "america's favorite mom" />
                <h2>Bio:</h2>
                    <p className="PTag">{mom.bio}</p>
                    <p  className="PTag"><h2>Question 1:</h2> <h3>{mom.answerOne.questionId.question}</h3></p>
                    <p>{mom.answerOne.userAnswer}</p>
                    <p  className="PTag"><h2>Question 2:</h2> <h3>{mom.answerTwo.questionId.question}</h3></p>
                    <p  className="PTag">{mom.answerTwo.userAnswer}</p>
                    <p  className="PTag"><h2>Question 3:</h2> <h3>{mom.answerThree.questionId.question}</h3></p>
                    <p  className="PTag">{mom.answerThree.userAnswer}</p>
                    <p  className="PTag"><h2>Question 4:</h2><h3>{mom.answerFour.questionId.question}</h3></p>
                    <p  className="PTag">{mom.answerFour.userAnswer}</p>
                    <p  className="PTag"><h2>Question 5:</h2><h3>{mom.answerFive.questionId.question}</h3></p>
                    <p  className="PTag">{mom.answerFive.userAnswer}</p>

                </>
            )}
       
           

          
          
        </div>

    )

}


export default ProfileDetailsPage;