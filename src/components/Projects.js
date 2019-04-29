import React, { Component } from 'react';
import './css/projects.css';
import Project from './Project';

class Projects extends Component {
  render() {
    const projects = [
      {
        name: 'Popular Movies',
        platform: 'android',
        repo: 'https://github.com/BCombs/PopularMoviesStage2',
        description:
          'App that lets users browse movies. The user can filter movies based on new release or rating. The user can also view movie teasers and trailers as well as save movies to their favorites.'
      },
      {
        name: 'MyReads',
        platform: 'react',
        repo: 'https://github.com/BCombs/my-reads',
        description:
          'MyReads is a virtual bookshelf. Users can search for books and add them to the shelves Currently Reading, Want to Read, and Read. Books can be moved from shelf to shelf as needed. This application was developed with ReactJS'
      },
      {
        name: 'Matching Game',
        platform: 'web',
        repo: 'https://github.com/BCombs/memory',
        description:
          'Web app of the classic card matching game. Flip over two cards at a time trying to match them.'
      },
      {
        name: 'Restaurant Reviews',
        platform: 'web',
        repo: 'https://github.com/BCombs/restaurant-reviews',
        description:
          'Fully responsive website showing restaurants in neighborhoods in NYC.'
      }
    ];

    const projectsList = projects.map((project, key) => {
      return (
        <div className="item" key={project.name}>
          <Project
            name={project.name}
            platform={project.platform}
            description={project.description}
            repo={project.repo}
          />
        </div>
      );
    });

    return (
      <section className="projects">
        <div className="projects-content">
          <h2>
            <span className="projects-title-alt-color">Development </span>
            Projects
          </h2>
          <div className="items">{projectsList}</div>
        </div>
      </section>
    );
  }
}

export default Projects;
