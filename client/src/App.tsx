import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { ROUTES } from './constants';
import { Login, Home, Dashboard, Subm, Sdefine } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.dashboard} element={<Dashboard />} />
        <Route path={ROUTES.subm} element={<Subm />} />
        <Route path={ROUTES.sdefine} element={<Sdefine />}/>
      </Routes>
    </div>
  );
}

export default App;
