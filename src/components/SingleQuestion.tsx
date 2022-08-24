import { useSelector } from 'react-redux';
import { nextPage, setResultQuestions } from '../redux/slice/slice';
import { RootState, useAppDispatch } from '../redux/store';
import * as SC from '../styles/GobalStyledComponents';

interface Props {
    question: any
    position: number;
}

export const SingleQuestion = ({ position, question }: Props) => {

    const dispatch = useAppDispatch();
    const page = useSelector((state: RootState) => state.triviaSlice.page)

    if ((page !== position)) {
        return null
    }
    const onNextPage = (value: string) => {
        dispatch(nextPage())
        dispatch(setResultQuestions({question,value}))
    }

    // tengo que agarrar la posicion de la pregunta en el arreglo y si se respondio true o False para luego hacer un find, buscar la pregunta correspondiente y mostrar si esta bien o mal
    return (
        <SC.QuestionCont>
            <div>{question.category}</div>
            <SC.Span>
                {question.question}
            </SC.Span>
            <SC.Span>
                {position} of 10
            </SC.Span>
            <SC.DivButton>
                <SC.Button onClick={() => onNextPage('True')} backgroundColor='green' border='1px solid green' value='true'>
                    True
                </SC.Button>
                <SC.Button onClick={() => onNextPage('False')} backgroundColor='red' border='1px solid red'>
                    False
                </SC.Button>
            </SC.DivButton>
        </SC.QuestionCont>
    )
}
