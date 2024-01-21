import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { initializeApp } from "firebase/app";
import { auth, firebaseConfig } from "../utils/firebase";
import { useEffect } from "react";
import {onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser , removeUser } from "../utils/userSlice";

const Body = () => {
   
    const routes = createBrowserRouter([
        {
            path : '/',
            element : <Login/>
        },{
            path : '/browse',
            element : <Browse/>
        }

    ]);


    return(
    <div>
        <RouterProvider router={routes} />
        {/* <Login/>
        <Browse/> */}
    </div>
    );
}


export default Body;