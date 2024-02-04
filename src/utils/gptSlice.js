import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptSlice',
    initialState : {
        gptActive : false
    },
    reducers : {
        makeGptActive : (state,action) => {
            state.gptActive = !state.gptActive; 
        }
    }
});

export default gptSlice.reducer;
export const {makeGptActive} = gptSlice.actions;