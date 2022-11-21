import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Infraccion from './components/pages/Infraccion';
import Login from './components/pages/Login';
import Citas from './components/pages/Citas';

export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/infraccion' element={<Infraccion />}/>
        <Route path='/citas' element={<Citas />}/>
      </Routes>
    </Router>
    </>
  );
}