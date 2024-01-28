import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth  } from '../utils/firebase';
import { useEffect } from 'react';

const Header = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.userTest);
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
    <div className="h-96 w-screen absolute bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="w-44 h-20"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      {user && <div className="flex p-2">
        <img
          className="bg-black w-[25] h-12 rounded-lg cursor-pointer"
          src="https://as2.ftcdn.net/v2/jpg/01/05/22/03/1000_F_105220364_uZLjYSvjNteViHToSlCuvFcXip4nCfFw.jpg"
          onClick={handleSignOut}
        />
        <h4 className='text-white font-medium p-4'>{user?.displayName}</h4>
      </div>
      }
    </div>
  );
}

export default Header