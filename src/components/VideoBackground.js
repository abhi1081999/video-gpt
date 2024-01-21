import React, { useEffect } from 'react'
import { MOVIE_API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailer } from '../utils/moviesSlice';
import useMovieTrailer from '../customHooks/useMovieTrailer';

const VideoBackground = ({id}) => {
    const vedioTrailer = useSelector(store => store.movies?.trailer);

    useMovieTrailer(id);

  return (
    <div className=''>
      <iframe className='w-screen aspect-video'
        src= {"https://www.youtube.com/embed/" + vedioTrailer?.key + '?autoplay=1&mute=1'}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
}

export default VideoBackground