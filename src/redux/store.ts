import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import triviaSlice from '../redux/slice/slice';

export const store=configureStore({
    reducer:{
        triviaSlice
    }
})

setupListeners(store.dispatch)