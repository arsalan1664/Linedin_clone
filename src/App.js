import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './userSlice';
import Login from './login';
import { auth } from './firebase';
import Widget from './Widget';



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=> {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid:   userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
     // eslint-disable-next-line
  }, [])

  
  return (
    <div className="app">
      <Header/>

      {!user ?( <Login /> ):(

        < div className="app__body">
          <Sidebar/>
          <Feed/>
          <Widget/>
          
        </div>
    )} 

    </div>
  );
}

export default App;
