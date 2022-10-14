import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL;


function CreateProfilePage(props) {
    const { user, storeToken, authenticateUser } = useContext(AuthContext);
    console.log(user)
    const [questions, setQuestions] = useState();
    const [questionOne, setQuestionOne] = useState(null);
    const [questionTwo, setQuestionTwo] = useState(null);
    const [questionThree, setQuestionThree] = useState(null);
    const [questionFour, setQuestionFour] = useState(null);
    const [questionFive, setQuestionFive] = useState(null);
    const [answerOne, setAnswerOne] = useState();
    const [answerTwo, setAnswerTwo] = useState();
    const [answerThree, setAnswerThree] = useState();
    const [answerFour, setAnswerFour] = useState();
    const [answerFive, setAnswerFive] = useState();

    const [bio, setBio] = useState();
    // const [imageUrl, setImageUrl] =useState();

    const storedToken = localStorage.getItem('authToken');

    const handleUserProfileSubmit = (event) => {
        event.preventDefault();
        const requestBody = {
            bio,
            answerOne,
            answerTwo,
            answerThree,
            answerFour,
            answerFive,
            questionOne,
            questionTwo,
            questionThree,
            questionFour,
            questionFive
        }
        axios.post(
            `${API_URL}/profile/profile`,
            requestBody,
            { headers: { Authorization: `Bearer ${storedToken}` } }
        )
            .then((response) => {
                storeToken(response.data.authToken)
                authenticateUser();
            })
            .catch((error) => console.log(error))

    }

    const handleQuestionOne = event => {
        console.log(event.target.value)
        setQuestionOne(event.target.value)
    }
    const handleQuestionTwo = event => {
        console.log(event.target.value)
        setQuestionTwo(event.target.value)
    }
    const handleQuestionThree = event => {
        console.log(event.target.value)
        setQuestionThree(event.target.value)
    }
    const handleQuestionFour = event => {
        console.log(event.target.value)
        setQuestionFour(event.target.value)
    }
    const handleQuestionFive = event => {
        console.log(event.target.value)
        setQuestionFive(event.target.value)
    }




    const handleAnswerOne = event => {
        console.log(event.target.value)
        setAnswerOne(event.target.value)
    }


    const handleAnswerTwo = event => {
        console.log(event.target.value)
        setAnswerTwo(event.target.value)
    }

    const handleAnswerThree = event => {
        console.log(event.target.value)
        setAnswerThree(event.target.value)
    }

    const handleAnswerFour = event => {
        console.log(event.target.value)
        setAnswerFour(event.target.value)
    }

    const handleAnswerFive = event => {
        console.log(event.target.value)
        setAnswerFive(event.target.value)
    }


    const handleBio = event => {
        console.log(event.target.value)
        setBio(event.target.value)
    }

    // const handleimageUrl = event => {
    //     console.log(event.target.value)
    //     setImageUrl(event.target.value)
    // }

    // const handleBirthdate = event => {
    //     console.log(event.target.value)
    //     setBio(event.target.value)
    // }



    const getQuestions = () => {

        const storedToken = localStorage.getItem('authToken');

        axios
            .get(
                `${API_URL}/profile/questions`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => {
                console.log(response.data)
                setQuestions(response.data)
                setQuestionOne(response.data[0]._id)
                setQuestionTwo(response.data[1]._id)
                setQuestionThree(response.data[2]._id)
                setQuestionFour(response.data[3]._id)
                setQuestionFive(response.data[4]._id)

            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getQuestions();
    }, [])


    return (
        <div className="UserProfile">
            
            <div className="CreateDiv">
            <h1 className="H1Create">Create Profile</h1>
            </div>
            
            

            <form onSubmit={handleUserProfileSubmit} className="create-form">

                {/* Add images using cloudinary */}

                <div className="ProfilePicture"><h2><label>My Photos</label></h2></div>
                <div><input type="file" name="user-profile-image" className="choose-file" /></div>

                <label>Age</label>
                <div><input type="number" /></div>


                <h2><label>My Work</label></h2>

                <div></div>

                <label> Title
                    <div><input /></div>
                </label>
                <label> Company
                    <div></div> <input />
                </label>

                <label className="bio">My Bio</label>
                <div><textarea className="TextArea" value={bio} onChange={handleBio} /></div>


                <h2><label>Profile Prompts</label></h2>

                <b><p>You can add up to five Profile Prompts to your profile</p></b>


                <p>Prompt One</p>

                <select onChange={handleQuestionOne} value={questionOne}>
                    {questions && questions.map((questions, index) => {
                        return <option value={questions._id} key={index}>{questions.question}</option>
                    })}
                </select>


                <div><textarea className="TextArea" value={answerOne} onChange={handleAnswerOne} /></div>


                <p>Prompt Two</p>

                <select onChange={handleQuestionTwo} value={questionTwo}>
                    {questions && questions.map((questions, index) => {
                        return <option value={questions._id} key={index}>{questions.question}</option>
                    })}
                </select>




                <div><textarea className="TextArea" value={answerTwo} onChange={handleAnswerTwo} /></div>


                <p>Prompt Three</p>
                <select onChange={handleQuestionThree} value={questionThree}>
                    {questions && questions.map((questions, index) => {
                        return <option value={questions._id} key={index}>{questions.question}</option>
                    })}
                </select>


                <div><textarea className="TextArea" value={answerThree} onChange={handleAnswerThree} /></div>

                <p>Prompt Four</p>
                <select onChange={handleQuestionFour} value={questionFour}>
                    {questions && questions.map((questions, index) => {
                        return <option value={questions._id} key={index}>{questions.question}</option>
                    })}
                </select>




                <div><textarea className="TextArea" value={answerFour} onChange={handleAnswerFour} /></div>

                <p>Prompt Five</p>

                <select onChange={handleQuestionFive} value={questionFive}>
                    {questions && questions.map((questions, index) => {
                        return <option value={questions._id} key={index}>{questions.question}</option>
                    })}
                </select>



                <div><textarea className="TextArea" value={answerFive} onChange={handleAnswerFive} /></div>

                <button type="submit" className="CreateButton">Submit</button>

            </form>
        </div>
    )

}

export default CreateProfilePage;

