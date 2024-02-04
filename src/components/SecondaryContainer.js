import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);
    
  return (
    <div className='font-bold bg-black w-screen'>
      <div className='p-6 -mt-36 z-40 relative'>
      <MovieList title = {'Now Playing'} movies = {movies?.nowPlayingMovies} />
      <MovieList title = {'Popular'} movies = {movies?.popular} />
      <MovieList title = {'Top Rated'} movies = {movies?.topRated} />
      <MovieList title = {'Upcoming'} movies = {movies?.upComing} />
      </div>
    </div>
    /*
    MovieList - popular
      MovieCard * n
    MovieList - horror
    MovieList - trending
    */
  )
}

export default SecondaryContainer