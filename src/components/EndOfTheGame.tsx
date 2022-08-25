import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNull } from "../redux/slice/slice";
import { RootState, useAppDispatch } from "../redux/store";
import * as SC from '../styles/GobalStyledComponents';
import {GrFormAdd,GrFormSubtract} from 'react-icons/gr'
export const EndOfTheGame = () => {

    const dispatch = useAppDispatch();
    const result = useSelector((state: RootState) => state.triviaSlice.resultQuestions)
    console.log(result);

    const navigate = useNavigate();

    const home = () => {
        navigate('/')
        dispatch(setNull())
    }
    const correct = result.filter(e => e.value === e.question.correct_answer)
    console.log(correct.length);

    return (
        <SC.ContBox gap='1rem' paddingTop='20px'>
            <div className='title'>You score</div>
            <SC.Span>{correct.length}/10</SC.Span>
            {
                result.map(e => {
                    if (e.value === e.question.correct_answer) {
                        return <SC.True>+ {e.question.question}</SC.True>
                    }
                    else {
                        return <SC.False>- {e.question.question}</SC.False>
                    }
                })
            }
            <SC.Button onClick={home}>Play Again?</SC.Button>
        </SC.ContBox>

    )
}
