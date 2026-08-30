import React from 'react';

import {Home, Team, Event, Program, Gallery, Membership} from './container';
import { Navbar, Footer } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar/>
  
    <Home/>
    <Program/>
    <Event/>
    <Team/>
    <Gallery/>
    <Membership/>
    <Footer/>   
    
  </div>
);

export default App;
