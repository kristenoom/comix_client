import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
