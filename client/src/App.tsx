import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Login, Home, Dashboard } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
