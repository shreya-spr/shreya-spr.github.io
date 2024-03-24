import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import certifications from "../../data/certification.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.LangContainer}>
        <h2 className={styles.title}>Languages & Frameworks</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
        
        <div className={styles.certContainer}>
          <h2 className={styles.certTitle}>Certifications</h2>
          <ul className={styles.history}>
            {certifications.map((certification, id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  <img
                    src={getImageUrl(certification.imageSrc)}
                    alt={`${certification.organisation} Logo`}
                  />
                  <div className={styles.historyItemDetails}>
                    <h3>{`${certification.title}`}</h3>
                    <h4>{`${certification.organisation}`} Certification</h4>
                    <p><a href={`${certification.link}`}>View credential</a></p>
                    
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

    </section>
  );
};