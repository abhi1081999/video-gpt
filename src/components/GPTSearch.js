import React from 'react'
import GPTInputSearch from './GPTInputSearch'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div className=''>
        <GPTInputSearch />
      </div>
        <GPTMovieSuggestions />
      
    </div>
  );
}

export default GPTSearch