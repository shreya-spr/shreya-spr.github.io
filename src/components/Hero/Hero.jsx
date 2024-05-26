import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shreya</h1>
        <p className={styles.description}>
          I'm a full-stack developer. Reach out if you'd like to learn more!
        </p>
        <a href="https://drive.google.com/file/d/1zDLP6T8cUVtM3uy6ojperFS6ShIodCa1/view?usp=sharing" target="_blank" className={styles.resumeBtn}>
          View Resume  
        </a>
      </div>
      <div className={styles.profilePicContainer}>
        <div className={styles.backgroundContainer}>
          <div className={styles.profileImgDiv}>
            <img
            src={getImageUrl("hero/heroImage.jpeg")}
            alt="Hero image of me"
            height={500}
            width={500}
            loading="lazy"
            className={styles.ProfileImg}
            />
          </div>
        </div>
      </div>



      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
