import { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",MOVIE_API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
        getPopularMovies();
    },[])

}

export default usePopularMovies;