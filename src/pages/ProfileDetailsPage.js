import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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

        <div>
            <div>Hi this is the profile details page</div>

            {mom && (
                <>
                    <p>{mom.bio}</p>
                    <p>Question 1: {mom.answerOne.questionId.question}</p>
                    <p>{mom.answerOne.userAnswer}</p>
                    <p>Question 2: {mom.answerTwo.questionId.question}</p>
                    <p>{mom.answerTwo.userAnswer}</p>
                    <p>Question 3: {mom.answerThree.questionId.question}</p>
                    <p>{mom.answerThree.userAnswer}</p>
                    <p>Question 4: {mom.answerFour.questionId.question}</p>
                    <p>{mom.answerFour.userAnswer}</p>
                    <p>Question 5: {mom.answerFive.questionId.question}</p>
                    <p>{mom.answerFive.userAnswer}</p>

                </>
            )}
       
           

          
          
        </div>

    )

}


export default ProfileDetailsPage;