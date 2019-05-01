import React from 'react';
import './css/about.css';
import Avatar from './Avatar';

const About = props => {
  return (
    <div className="about">
      <h1 className="about-title">
        <span>About </span>Me
      </h1>
      <div className="avatar">
        <Avatar />
      </div>
      <p>
        Hello! My name is Bill. I am a software developer from Fort Wayne,
        Indiana. I have an AS degree in Information Technology - Software
        Systems Engineering as well as completing Nanodegrees from Udacity to
        further my knowledge and stay current with skills. The Nanodegrees I
        have completed are <em>Android Developer</em>,{' '}
        <em>Front-end Web Developer</em>, and I am currently taking the{' '}
        <em>React Nanodegree</em>.
        <br />
        <br />
        In 2017 I was accepted into the{' '}
        <em>Grow With Google Developer's Challenge</em> for android development.
        This was a 3 month long challenge to complete coding assignments to earn
        a 100% paid 6 month scholarship for the Android Developer Nanodegree.
        The Android Developer Nanodegree took studends who were at least
        intermediate with android development and taught you advanced concepts.
        I finished the challenge in late 2017 and was awarded one of the few{' '}
        <em>Grow With Google</em> scholarships.
        <br />
        <br />
        My biggest interest, which takes up the majority of my time, is software
        development. I love learning and being exposed to new technologies that
        I haven't worked with. <br />
        For me personally, that is one of the things I like about development
        the most. It is always changing. I enjoy constantly evolving to stay
        current. Outside of development I have many interests. I play jazz
        guitar and enjoy studying music theory. I also read non-fiction books,
        play video games, and watch documentaries.
      </p>
    </div>
  );
};

export default About;
