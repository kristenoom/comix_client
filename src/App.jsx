import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Auth from './auth/Auth';
//import Sitebar from './components/site/Header';

import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
    const [sessionToken, setSessionToken] = useState('');

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setSessionToken(localStorage.getItem('token'))
        }
    }, []);

    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken)
        console.log(sessionToken);
    }


    return (
        <div className="App">
            <Header />
            <Router>
                <Sidebar />
            </Router>
            <Auth updateToken={updateToken} />
            <Footer />
        </div>
    );
};

export default App;