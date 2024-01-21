import React, { useEffect } from 'react'
import Header from './Header'
import { MOVIE_API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {

  useNowPlayingMovies();

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