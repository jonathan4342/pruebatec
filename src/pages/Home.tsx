import { Navigate, useNavigate } from 'react-router-dom';
import * as SC from '../styles/GobalStyledComponents';

export const Home = () => {

    const navigate=useNavigate();

    const questions=()=>{
        navigate('/questions')
    };
    return (
        <SC.ContBox>
            <div className="title ">
                Welcome to the Trivia challenge!
            </div>
            <span >
                You will be presented with 10 True or False questions.
            </span>
            <span>
                Can you score 100%?
            </span>
            <div>
                <SC.Button onClick={questions}>
                    BEGIN
                </SC.Button>
            </div>
        </SC.ContBox>
    )
}
