import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Login, Home, Dashboard } from './pages';
import { ROUTES } from './constants';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.dashboard} element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
