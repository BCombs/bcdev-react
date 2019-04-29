import React, { Component } from 'react';

class Project extends Component {
  getIcon() {
    switch (this.props.platform) {
      case 'android':
        return <i className="fab fa-android fa-4x" />;
      case 'react':
        return <i className="fab fa-react fa-4x" />;
      case 'web':
        return <i className="fas fa-globe fa-4x" />;
      default:
        return <i className="fas fa-file-code fa-4x" />;
    }
  }

  render() {
    const { name, platform, description, repo } = this.props;

    return (
      <div>
        <a
          href={repo}
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.getIcon()}
        </a>
        <a href={repo} target="_blank" rel="noopener noreferrer">
          <h1>{name}</h1>
        </a>
        <p>{description}</p>
      </div>
    );
  }
}

export default Project;
