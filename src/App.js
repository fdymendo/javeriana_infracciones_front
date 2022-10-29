import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Infraccion from './components/Infraccion';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/infraccion' element={<Infraccion />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
