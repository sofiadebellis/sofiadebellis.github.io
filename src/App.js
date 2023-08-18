import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Home from './components/Home';


function App () {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Dashboard/>} />
        <Route path='/home' element={ <Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;