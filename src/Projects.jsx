import React from "react";
import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, url, img, title } = project;
          return (
            <a href={url} key={id} rel="noreferrer" className="project">
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
