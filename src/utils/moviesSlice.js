import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        nowPlayingMovies : null,
        trailer: null,
        popular: null,
        topRated : null,
        upComing: null
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popular = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRated = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upComing = action.payload;
        },
        addTrailer : (state, action) => {
            state.trailer = action.payload;
        }
    }
})

export default moviesSlice.reducer;
export const {addNowPlayingMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;