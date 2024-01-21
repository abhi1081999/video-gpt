import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailer } from '../utils/moviesSlice';
import { MOVIE_API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (id) => {

    const dispatch = useDispatch();
    //console.log(id);
    const getMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos', MOVIE_API_OPTIONS);
        const json = await data.json();
        //console.log(json.results);
        const trailersArray = json.results.filter(i=>i.type=='Trailer');
        const trailerObj = trailersArray.length ? trailersArray[0] : json.results[0];

        // console.log(trailerObj.key);
        dispatch(addTrailer(trailerObj));
        
    }

    useEffect(()=>{
        getMovie();
    },[]);

}

export default useMovieTrailer