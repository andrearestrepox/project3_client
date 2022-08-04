import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";


const API_URL = "http://localhost:5005"

function EditProfilePage(props) {



    const { user, storeToken, authenticateUser, logOutUser } = useContext(AuthContext);
    console.log(user)
    console.log(user._id)
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
    const storedToken = localStorage.getItem('authToken');





    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();



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

            })
            .catch((error) => console.log(error));
    };

    const getMyProfile = () => {
        const storedToken = localStorage.getItem('authToken');

        axios
            .get(
                `${API_URL}/profile/individual-profile/my-data`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => {
                console.log(response.data)
                setQuestionOne(response.data.answerOne.questionId._id)
                setQuestionTwo(response.data.answerTwo.questionId._id)
                setQuestionThree(response.data.answerThree.questionId._id)
                setQuestionFour(response.data.answerFour.questionId._id)
                setQuestionFive(response.data.answerFive.questionId._id)
                setAnswerOne(response.data.answerOne.userAnswer)
                setAnswerTwo(response.data.answerTwo.userAnswer)
                setAnswerThree(response.data.answerThree.userAnswer)
                setAnswerFour(response.data.answerFour.userAnswer)
                setAnswerFive(response.data.answerFive.userAnswer)
                setBio(response.data.bio)

                setEmail()

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getMyProfile()
        getQuestions();
    }, [])

    const handleEditSubmit = (event) => {
        event.preventDefault();
        const storedToken = localStorage.getItem('authToken')
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
        axios.post(`${API_URL}/profile/edit-profile`, requestBody, {
            headers: {
                Authorization: `Bearer ${storedToken}`
            }
        })
            .then(response => {
                console.log(response.data)
                navigate('/users')
            })
            .catch(err => console.log(err))

    }

    const handleBio = event => {
        console.log(event.target.value)
        setBio(event.target.value)
    }

    const handleDelete = () => {
        const storedToken = localStorage.getItem('authToken')
        
            axios.delete(
                `${API_URL}/profile/individual-profile`, { headers: { Authorization: `Bearer ${storedToken}`},})
                
                .then((response) => {
                    console.log(response.data)
                    logOutUser();
                })
                .catch((err) => console.log(err))
            
            
    }


    return (
        <div className="SignupPage">
            <h1>Edit Profile</h1>

           


            <form onSubmit={handleEditSubmit}>
            <button type="submit" className="UpdateButton">Update</button>
                
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


               






            </form>
                    <button className="DeleteButton" onClick={handleDelete}>DELETE</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    )

};




export default EditProfilePage;