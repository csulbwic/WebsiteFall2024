import React from 'react';

import {Home, Mission, Team, Event, Program} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar/>
  
    <Home/>
    <Program/>
    <Event/>
    <Team/>
    {/* <Mission/>
    <Team/>
    <Event/> */}
    

   

  </div>
);

export default App;