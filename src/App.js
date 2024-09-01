import React from 'react';

import {Home, Team, Event, Program, Gallery, MailList} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar/>
  
    <Home/>
    <Program/>
    <Event/>
    <Team/>

    <Gallery/>
    {/* <MailList/>     */}
    
  </div>
);

export default App;