import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
TrivQuestions:[]
}
export const triviaSlice= createSlice({
    name:'root',
    initialState,
    reducers:{
        setTrivQuestions:(initialState,{payload})=>{
            initialState.TrivQuestions=payload;
        }
    }
})
const {setTrivQuestions}=triviaSlice.actions;

export const getQuestions=createAsyncThunk(
    'questions',
    async(id,thunkAPI)=>{
        const {dispatch}=thunkAPI;
        const {data}=await axios.get(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`)
        dispatch(setTrivQuestions(data.results))
    }
)

export default triviaSlice.reducer;