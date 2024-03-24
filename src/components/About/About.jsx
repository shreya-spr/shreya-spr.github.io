import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About<span>Me</span></h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/freepikImage.svg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutText}>
        Hey, I'm 
        <span> Shreya , </span>
        a junior at <span>PES University, Bangalore,</span> pursuing a B.Tech in <span>Computer Science and Engineering.</span>
        <br/>
        I've had the opportunity to work on diverse projects, from crafting dynamic web applications to working with various machine learning tasks. I am passionate about staying updated with the latest in technology and always willing to learn.
        <br/>
        I bring a teamwork mindset, quick learning skills, and constant dedication to personal and professional growth.
        <br/>
        <span>Let's build something great together!</span>
        </div>
      </div>
    </section>
  );
};
