import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { ProtectedRoute } from './components/protectedRoute';
import { ROUTES } from './constants';
import { Login, Home, Subm, Sdefine, Dashboard } from './pages';
import { PrintChq } from './pages/printChq';
import { PrintSch } from './pages/printSch';

function App() {

  const isLoggedin = localStorage.getItem('isAuthenticated');

  return (

    <>

      {isLoggedin ? <Dashboard /> : null}

      {/* <Routes>
        <Route element={<ProtectedRoute component={Dashboard} />} />
      </Routes> */}


      <div className='App'>
        <Routes>

          <Route path={ROUTES.home} element={<Login />} />
          <Route path={ROUTES.login} element={<Login />} />
          {/* <Route path={ROUTES.dashboard} element={<Dashboard />} /> */}
          {/* <Route path={ROUTES.dashboard} element={<ProtectedRoute component={Dashboard} />} /> */}
          {/* <Route path={ROUTES.subm} element={<Subm />} /> */}
          <Route path={ROUTES.subm} element={<ProtectedRoute component={Subm} />} />
          {/* <Route path={ROUTES.sdefine} element={<Sdefine />}/> */}
          <Route path={ROUTES.sdefine} element={<ProtectedRoute component={Sdefine} />} />
          <Route path={ROUTES.printSch} element={<ProtectedRoute component={PrintSch} />} />
          <Route path={ROUTES.printChq} element={<ProtectedRoute component={PrintChq} />} />

          {/* <ProtectedRoute  component={<Sdefine />}/> */}
        </Routes>
      </div></>
  );
}

export default App;
