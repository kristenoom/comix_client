import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, {useEffect, useState} from 'react'
import Sitebar from './components/site/Header'
import Auth from './auth/Auth'


function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, []);

  const updateToken = (newToken)=> {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken)
    console.log(sessionToken);
  }


  return (
    <div className="App">
    <Sitebar/>
    <Auth/>
    </div>
  );
}

export default App;
