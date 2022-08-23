import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface Props {
    question: any
    position: number;
}

export const SingleQuestion = ({ position, question }: Props) => {

    const page = useSelector((state: RootState) => state.triviaSlice.page)

    if((page !== position)){
        return null
    }

    return (
        <div>{question.category}</div>
    )
}
