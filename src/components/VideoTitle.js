import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[17%] px-16 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-slate-100 text-black p-3 px-16 rounded-2xl hover:bg-opacity-70'>Play</button>
            <button className='mx-4 bg-slate-500 text-white p-3 px-16 rounded-2xl bg-opacity-60'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle