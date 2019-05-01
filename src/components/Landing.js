import React from 'react';
import './css/landing.css';
import { Link } from 'react-router-dom';

const Landing = props => {
  return (
    <section className="landing">
      <div className="landing-content">
        <h1>A Lifelong Journey of Learning</h1>
        <p>
          I love creating, problem soliving, and learning. Software development
          is an art form with an ever changing canvas.
        </p>
        <Link className="btn" to="/projects">
          My Projects
        </Link>
      </div>
    </section>
  );
};

export default Landing;
