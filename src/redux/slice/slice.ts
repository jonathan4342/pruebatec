import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    trivQuestions: [],
    page: 1
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
        }
    }
})
export const { setTrivQuestions, nextPage } = triviaSlice.actions;

export const getQuestions = createAsyncThunk(
    'questions',
    async (_, { dispatch }) => {
        const { data: { results } } = await axios.get(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`)
        dispatch(setTrivQuestions(results))
    }
)

export default triviaSlice.reducer;