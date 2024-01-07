import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[IsSignUpForm, setIsSignUpForm] = useState(false);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form className="text-center rounded-xl absolute my-auto p-16 bg-black w-4/12 mx-auto mt-44 right-0 left-0 text-white bg-opacity-80">
        <h1 className="py-7 text-3xl font-bold">
          {IsSignUpForm ? "Sign up" : "Sign In"}
        </h1>

        {IsSignUpForm && (
          <input
            type="text"
            placeholder="Name"
            className="text-lg text-zinc-400 p-3 my-3 bg-gray-900 w-full rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="email"
          className="text-lg text-zinc-400 p-3 my-3 bg-gray-900 w-full rounded-md"
        />
        <input
          type="password"
          placeholder="password"
          className="text-lg text-zinc-400 p-3 my-2 bg-gray-900 w-full rounded-md"
        />
        <button className="p-3 my-6 bg-red-700 w-full rounded-md font-bold">
          {IsSignUpForm ? "Sign up" : "Sign In"}
        </button>

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