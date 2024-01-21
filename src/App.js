import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import { Provider, useDispatch } from 'react-redux';
import appStore from './utils/appStore';
import { initializeApp } from 'firebase/app'; 
import { firebaseConfig, auth } from './utils/firebase';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from './utils/userSlice';

function App() {


  return (
      <Provider store={appStore}>
      <Body/>
      </Provider>
  );
}

export default App;
