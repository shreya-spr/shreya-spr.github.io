import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, year, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.headerContainer}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.year}>{year}</p>
      </div>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.btn}>
          View on GitHub
        </a>

        {demo && demo.trim() !== "" && (
            <a href={demo} className={styles.demobtn}>
              Demo
            </a>
        )}
      </div>
    </div>
  );
};
