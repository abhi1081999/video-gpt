import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth  } from '../utils/firebase';
import { useEffect } from 'react';
import { makeGptActive } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.userTest);
  const gpt = useSelector(store => store.gptStatus.gptActive);
  const getLang = useSelector(store => store.configuration.lang);
  
  //console.log(user + '- from header');
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((e) => {console.log(e);});
  };

  
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user)=>{
    console.log('auth state change -> ' + user);
    
    console.log(user);
    if(user){
        const {uid, email, displayName} = user;
        dispatch(addUser({uid, email, displayName}));
        navigate('/browse')
    }
    else{
        dispatch(removeUser());
        navigate('/')
    }
  })
  return () => unsubscribe();
},[])

  return (
    <div className="p-2 h-96 w-screen absolute bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 h-20"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      {user && (
        <div className="flex p-2">
          {gpt && (
            <select
              value={getLang}
              onChange={(e) => {
                dispatch(changeLanguage(e.target.value));
              }}
              className="px-1 h-14 rounded-lg bg-gray-900 text-white font-bold"
            >
              {SUPPORTED_LANGUAGES.map((i) => {
                return <option key={i.identifier}>{i.name}</option>;
              })}
            </select>
          )}
          <button
            className="px-3 mx-5 h-14 w-auto text-white bg-gray-800 rounded-lg"
            onClick={() => {
              dispatch(makeGptActive());
            }}
          >
           {gpt ? "Home Page": "GPT Search"} 
          </button>
          <img
            className="bg-black w-[25] h-12 rounded-lg cursor-pointer"
            src="https://as2.ftcdn.net/v2/jpg/01/05/22/03/1000_F_105220364_uZLjYSvjNteViHToSlCuvFcXip4nCfFw.jpg"
            onClick={handleSignOut}
          />
          <h4 className="text-white font-medium p-4">{user?.displayName}</h4>
        </div>
      )}
    </div>
  );
}

export default Header