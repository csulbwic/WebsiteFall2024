import React from 'react';

import {Home, Team, Program, Gallery, Membership, UpcomingEvent} from './container';
import { Navbar, Footer } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar/>
    <Home/>
    <div className="section-divider"></div>
    <UpcomingEvent/>
    <Program/>
    <Team/>
    <Gallery/>
    <Membership/>
    <Footer/>   
    
  </div>
);

export default App;