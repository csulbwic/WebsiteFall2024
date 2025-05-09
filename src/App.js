import React from 'react';

import { AboutPage } from "./container";

import {Home, Team, Event, Program, Gallery, MailList} from './container';
import { Navbar, Footer } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar/>
    
    <AboutPage/>
    <Home/>
    <Program/>
    <Event/>
    <Team/>

    <Gallery/>
    <MailList/> 
    <Footer/>   
    
  </div>
);



export default App;