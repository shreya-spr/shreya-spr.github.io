import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <>
    <hr className={styles.horizontalLine}></hr>
    
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Whether you want to discuss a collaboration, or want to talk about projects,feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <p>
            shreyaprao26@gmail.com
          </p>
          
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/shreya-p-rao-6a381525b/" className={styles.linkName}>Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/shreya-spr" className={styles.linkName}>GitHub</a>
        </li>
      </ul>

      <div className={styles.footerText}>©️ Made with ❣️ by Shreya</div>
    </footer>
    </>
  );
};