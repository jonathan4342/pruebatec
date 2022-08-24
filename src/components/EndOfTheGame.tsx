import { useNavigate } from "react-router-dom";
import { setNull } from "../redux/slice/slice";
import { useAppDispatch } from "../redux/store";

export const EndOfTheGame = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const home = () => {
        navigate('/')
        dispatch(setNull())
    }
    return (
        <div>
            <div>EndOfTheGame</div>
            <button onClick={home}>Play Again</button>
        </div>

    )
}
