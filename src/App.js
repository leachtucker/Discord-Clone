import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

import './App.css';

import { selectUser } from './features/userSlice';

import { login, logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in through firebase auth
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        // User logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="app">
      {user ?
        <>
          <Sidebar />
          <Chat />
        </>
        :
        <>
          <Login />
        </>
      }
    </div>
  );
}

export default App;