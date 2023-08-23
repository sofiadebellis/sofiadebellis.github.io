import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills'
import HonoursAndAwards from './components/HonoursAndAwards';
import Volunteering from './components/Volunteering';

function App () {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Dashboard/>} />
        <Route path='/home' element={ <Home/>} />
        <Route path='/experience' element={ <Experience/>} />
        <Route path='/education' element={ <Education/>} />
        <Route path='/volunteering' element={ <Volunteering/>} />
        <Route path='/skills' element={ <Skills/>} />
        <Route path='/honors-and-awards' element={ <HonoursAndAwards/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;