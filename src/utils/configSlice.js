import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    initialState : {
        lang : "English"
    },
    name : "config",
    reducers : {
        changeLanguage : (state, action) => {
            state.lang = action.payload;
        }
    }
})

export const {changeLanguage} = configSlice.actions;
export default configSlice.reducer;