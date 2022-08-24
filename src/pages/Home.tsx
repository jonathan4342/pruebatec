import { useNavigate } from 'react-router-dom';
import * as SC from '../styles/GobalStyledComponents';

export const Home = () => {

    const navigate = useNavigate();

    const questions = () => {
        navigate('/questions')
    };
    return (
        <SC.ContBox>
            <div className="title ">
                Welcome to the Trivia challenge!
            </div>
            <SC.Span >
                You will be presented with 10 True or False questions.
            </SC.Span>
            <SC.Span>
                Can you score 100%?
            </SC.Span>
            <div>
                <SC.Button onClick={questions}>
                    BEGIN
                </SC.Button>
            </div>
        </SC.ContBox>
    )
}
