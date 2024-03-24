import React, {useState} from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const initialVisible = 4; // Number of cards to display initially
  const additionalVisible = projects.length - initialVisible; // Number of additional cards to display when "View More" is clicked
  const [visible, setVisible] = useState(initialVisible);

  const handleViewMore = () => {
    setVisible((prevVisible) => prevVisible + additionalVisible);
  };

  const handleViewLess = () => {
    setVisible(initialVisible);
  }

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {/* Slice the projects array based on the visible state */}
        {projects.slice(0, visible).map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>

      {/* Display "View More" button if there are more projects to display */}
      {visible < projects.length && (
        <button onClick={handleViewMore} className={styles.viewButton}>
          View More...
        </button>
      )}

      {visible === projects.length && (
        <button onClick={handleViewLess} className={styles.viewButton}>
          View Less...
        </button>
      )}
    </section>
  );
};
