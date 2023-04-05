import {configureStore} from '@reduxjs/toolkit';
import ClientReducer from './slices/clientSlice';

export const store = configureStore({
    reducer: {
        client: ClientReducer,
    },
})