import { createSlice } from "@reduxjs/toolkit";
import { Props } from "../../interfaces/Interfaces";

const initialState: Props = {
    trivQuestions: [],
    page: 1,
    resultQuestions:[]
}
export const triviaSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setTrivQuestions: (initialState, { payload }) => {
            initialState.trivQuestions = payload;
        },

        nextPage: (initialState) => {
            initialState.page++;
        },
        setNull: (initialState) => {
            initialState.trivQuestions = [];
            initialState.page = 1
        },
        setResultQuestions: (initialState, { payload}) => {
            initialState.resultQuestions=[...initialState.resultQuestions,payload];
        }
    }
})
export const { setTrivQuestions, nextPage, setNull,setResultQuestions } = triviaSlice.actions;


export default triviaSlice.reducer;