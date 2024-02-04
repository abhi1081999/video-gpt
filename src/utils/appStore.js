import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import gptReducer from './gptSlice';
import configReducer from './configSlice';

const appStore = configureStore({
    reducer : {
        userTest: userReducer,
        movies : moviesReducer,
        gptStatus : gptReducer,
        configuration : configReducer
    },
    middleware : null
});

export default appStore;