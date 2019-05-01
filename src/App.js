import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import AboutContainer from './components/AboutContainer';
import ContactContainer from './components/ContactContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Landing} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={AboutContainer} />
      <Route exact path="/contact" component={ContactContainer} />
    </div>
  );
}

export default App;
