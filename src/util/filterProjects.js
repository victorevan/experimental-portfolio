import projects from '../data/projects';

export default (userTag) => {
  return projects.filter(({ tags }) => {
    let projectMatches = false;
    tags.forEach((tag) => {
      if (tag === userTag) {
        projectMatches = true;
      };
    });
    return projectMatches;
  });
};