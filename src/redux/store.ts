import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import { useDispatch, useSelector } from 'react-redux';
import triviaSlice from '../redux/slice/slice';

export const store=configureStore({
    reducer:{
        triviaSlice
    }
})
export type RootState= ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Custom app dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector=()=>useSelector((state:RootState)=>state)
setupListeners(store.dispatch)