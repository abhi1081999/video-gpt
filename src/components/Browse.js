import React, { useEffect } from 'react'
import Header from './Header'
import { MOVIE_API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../customHooks/usePopularMovies'
import useTopRatedMovies from '../customHooks/useTopRatedMovies'
import useUpcomingMovies from '../customHooks/useUpcomingMovies'

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* Main container
             - Vedio Container
             - Vedio title
          Secondary Container
             - movieList * n
             - cards * n
      */}

    </div>
  )
}

export default Browse