import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

    if (movies == null) return; 
  return (
    <div className='px-2 mt-2'>
        <h1 className='text-2xl py-2 text-white'>{title}</h1>
      <div className='flex overflow-x-auto no-scrollbar'>
        
        <div className="flex">
          {movies.map((i) => {
            return <MovieCard title={i.title} imageValue={i.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieList