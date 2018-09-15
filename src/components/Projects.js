import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components'; 

import tagValidator from '../util/tagValidator';
import filterProjects from '../util/filterProjects';
import intoN from '../util/intoN';
import allProjects from '../data/projects';

const ProjectTileContainer = styled.li`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectTile = ({ content }) => (
  <ProjectTileContainer>
    {content}
  </ProjectTileContainer>
);

const ProjectTilesContainer = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ProjectTiles = ({ projects }) => (
  <ProjectTilesContainer>
    {projects.map((project) => (
      <ProjectTile
        key={project.title}
        content={JSON.stringify(project)}
      />
    ))}
  </ProjectTilesContainer>
);

class Projects extends Component {
  state = {
    projects: null
  }

  componentDidMount() {
    console.log('Projects did mount');
    const { params } = this.props.match;
    const { tag: projectType } = params;
    console.log('projectType: ', projectType);
    let projects;

    if (tagValidator(projectType)) {
      projects = filterProjects(projectType);
    } else if (projectType === 'all') {
      projects = allProjects;
    }

    this.setState(() => ({projects: intoN(projects,4)}));
  }

  render() {
    const { match } = this.props;
    const { projects } = this.state;
    if (projects === null) return null;

    return (
      <div className="full projects">
        <Route exact path={match.url} render={() => (
          <ProjectTiles projects={projects[0]} />
        )} />
        {projects.length > 1
          ? projects.slice(1).map((projectArr, i) => (
            <Route key={i} path={`${match.url}/page-${i+2}`} render={() => {
              return <ProjectTiles projects={projectArr} />
            }} />
          ))
          : null
        }
      </div>
    );
  };
};

export default Projects;