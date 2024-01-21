import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { logDOM } from '@testing-library/react';
import { useSelector } from 'react-redux';

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (movies == null) return;

    const mainMovie = movies[0];

    const { title, overview, id } = mainMovie; 

  return (
    <div>
        <VideoTitle title = {title} overview={overview} />
        <VideoBackground id= {id}/>
        
    </div>
  )
}

export default MainContainer