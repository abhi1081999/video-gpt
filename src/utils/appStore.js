import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';

const appStore = configureStore({
    reducer : {
        userTest: userReducer,
        movies : moviesReducer
    },
    middleware : null
});

export default appStore;