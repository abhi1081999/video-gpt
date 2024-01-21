import React, { useRef, useState, useEffect } from 'react'
import Header from './Header'
import { ValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';

const Login = () => {
  const [IsSignUpForm, setIsSignUpForm] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignIn = () => {
    const errorMessage = ValidateData(
      email.current.value,
      password.current.value
    );
    //console.log(errorMessage);
    // if(errorMessage != null){
    //   console.log(error);
    setError(errorMessage);
    // }
    if (errorMessage) return;

    if (IsSignUpForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((credential) => {
          updateProfile(auth.currentUser, {displayName: name.current.value}).then(()=>{
          }).catch(()=>{

          });
        })
        .catch((error) => {
          
        });
    } else {
      console.log(IsSignUpForm);
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="text-center rounded-xl absolute my-auto p-16 bg-black w-4/12 mx-auto mt-44 right-0 left-0 text-white bg-opacity-80">
        <h1 className="py-7 text-3xl font-bold">
          {IsSignUpForm ? "Sign up" : "Sign In"}
        </h1>

        {IsSignUpForm && (
          <input
            type="text"
            placeholder="Name"
            ref = {name}
            className="text-lg text-zinc-400 p-3 my-3 bg-gray-900 w-full rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email"
          className="text-lg text-zinc-400 p-3 my-3 bg-gray-900 w-full rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="text-lg text-zinc-400 p-3 my-2 bg-gray-900 w-full rounded-md"
        />
        <button className="p-3 my-6 bg-red-700 w-full rounded-md font-bold" onClick={handleSignIn}>
          {IsSignUpForm ? "Sign up" : "Sign In"}
        </button>
          {error!==null && (<p className='font-semibold text-red-600 text-lg'>{error}</p>)}
        {IsSignUpForm === false && (
          <p className="py-2 font-semibold">
            New to Netflix ?{" "}
            <b
              onClick={() => {
                console.log("clicked");
                setIsSignUpForm(!IsSignUpForm);
                //   return <Login IsSignUpForm={true} />;
              }}
              className="cursor-pointer"
            >
              Sign up{" "}
            </b>
            Now
          </p>
        )}
      </form>
    </div>
  );
}

export default Login