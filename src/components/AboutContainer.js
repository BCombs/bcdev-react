import React from 'react';
import Image from './Image';
import About from './About';

const AboutContainer = props => {
  return (
    <div>
      <div className="image-holder">
        <Image />
      </div>
      <div className="about-content">
        <About />
      </div>
    </div>
  );
};

export default AboutContainer;
