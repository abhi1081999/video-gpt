import React from 'react'
import lang from '../utils/langConstants';
import { useSelector } from 'react-redux';

const GPTInputSearch = () => {

  const userLang = useSelector(store => store.configuration.lang);
  return (
    <div className="pt-[14%] flex justify-center">
      <form className="absolute z-20 bg-black grid-cols-12 w-1/2 grid rounded-lg">
        <input
          type="text"
          placeholder={lang[userLang]?.["placeholder"]}
          className=" m-3 p-2 col-span-10 text-black text-2xl border-black rounded-lg"
        />
        <button className="m-3 col-span-2 text-white font-bold bg-red-500 rounded-xl">
          {lang[userLang]?.["Search"]}
        </button>
      </form>
    </div>
  );
}

export default GPTInputSearch