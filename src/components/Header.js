import React, { Component } from 'react';
import './css/header.css';
import Branding from './Branding';
import Navigation from './Navigation';

class Header extends Component {
  render() {
    return (
      <header>
        <Branding />
        <Navigation />
      </header>
    );
  }
}

export default Header;
