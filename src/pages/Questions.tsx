import { useEffect } from "react";
import { getQuestions } from "../redux/slice/slice";
import { useAppDispatch, useAppSelector } from "../redux/store";


export const Questions = () => {

    const dispatch = useAppDispatch()
    const {TrivQuestions}=useAppSelector().triviaSlice
    
    useEffect(() => {
        dispatch(getQuestions())
    },[])

    return (
        <>
        <h1>questions</h1>
        {
            TrivQuestions.forEach(e=>
            <div>{e}</div>
            )
        }
        </>
    )
}