import React, { useEffect } from 'react'
import Header from './Header'
import { MOVIE_API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../customHooks/usePopularMovies'
import useTopRatedMovies from '../customHooks/useTopRatedMovies'
import useUpcomingMovies from '../customHooks/useUpcomingMovies'
import GPTSearch from './GPTSearch'

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
 
  const getGptStatus = useSelector(store => store.gptStatus?.gptActive);

  return (
    <div>
      <Header />
      {getGptStatus ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />{" "}
        </>
      )}

      {/* Main container
             - Vedio Container
             - Vedio title
          Secondary Container
             - movieList * n
             - cards * n
      */}
    </div>
  );
}

export default Browse