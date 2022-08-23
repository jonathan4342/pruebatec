import { useEffect } from "react";
import { getQuestions, nextPage } from "../redux/slice/slice";
import { useAppDispatch, RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { SingleQuestion } from "../components/SingleQuestion";

export const Questions = () => {

    const dispatch = useAppDispatch();
    const trivQuestions = useSelector((state: RootState) => state.triviaSlice.trivQuestions);

    const onNextPage = () => {
        dispatch(nextPage())
    }

    useEffect(() => {
        dispatch(getQuestions())
    }, [dispatch])

    return (
        <div style={{width:"100%"}}>
            <h1>questions</h1>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "centers",width:"100%" }}>
                {
                    trivQuestions.map((e: any,index) =>
                        <SingleQuestion
                            key={index}
                            question={e}
                            position={index}
                        />  
                    )
                }
            </div>
            <button onClick={onNextPage}>
                Siguiente
            </button>
        </div>
    )
}