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
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <Landing />
          </div>
        )}
      />
      <Route exact path="/projects" render={() => <Projects />} />
      <Route exact path="/about" render={() => <AboutContainer />} />
      <Route exact path="/contact" render={() => <ContactContainer />} />
    </div>
  );
}

export default App;
