import { useEffect } from "react";
import { useAppDispatch, RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { SingleQuestion } from "../components/SingleQuestion";
import { EndOfTheGame } from "../components/EndOfTheGame";
import { getQuestions } from "../redux/actions/Actions";

export const Questions = () => {

    const dispatch = useAppDispatch();
    const { trivQuestions, page } = useSelector((state: RootState) => state.triviaSlice);



    useEffect(() => {
        dispatch(getQuestions())
    }, [dispatch])

    return (
        // tengo que setear el estado trivQuestion en null una vez le de al boton PLAY AGAIN y realizar
        // la peticion cada vez que entre al componete de question 
        <div style={{ width: "100%" }}>
            {
                page > 9 ? <EndOfTheGame /> :
                    <>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "centers", width: "100%" }}>
                            {
                                trivQuestions?.map((e: any, index) =>
                                    <SingleQuestion
                                        key={index}
                                        question={e}
                                        position={index}
                                    />
                                )
                            }
                        </div>

                    </>

            }
        </div>
    )
}