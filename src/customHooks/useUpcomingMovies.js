import { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
    
    const dispatch = useDispatch();
    const getUpcomingMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',MOVIE_API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
    useEffect(()=>{
        getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;