import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return(
    <>
      <Link to="/">Home </Link>
      <Link to="/about">Sobre </Link>
      <Link to="/projects">Projects </Link>
      <Link to="/contact">Contact</Link>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contact" component={ Contact} />
      </Switch>
    </>
  )
}

export default App;
