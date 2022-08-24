import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { setTrivQuestions } from "../slice/slice"


export const getQuestions = createAsyncThunk(
    'questions',
    async (_, { dispatch }) => {
        const { data: { results } } = await axios.get(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`)
        dispatch(setTrivQuestions(results))
    }
)
