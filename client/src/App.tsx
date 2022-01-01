import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Login, Home } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
