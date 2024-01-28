import React from 'react'
import { moviesImageURL } from '../utils/constants'

const MovieCard = ({title, imageValue}) => {
  return (
    <div className='w-60 h-auto p-3'>
        <h1 className='text-gray-400'>{title}</h1>
    <img className='rounded-xl' src = {moviesImageURL + imageValue}/>
    </div>
  )
}

export default MovieCard  