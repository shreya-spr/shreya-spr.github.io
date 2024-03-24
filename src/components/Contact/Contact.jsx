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
          {/* <a href="">myemail@email.com</a>  Instead copy email to clipboard once hovered*/}
          <p>shreyaprao26@gmail.com</p>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/shreya-p-rao-6a381525b/">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/shreya-spr">GitHub</a>
        </li>
      </ul>

      <div className={styles.footerText}>©️ Made with ❣️ by Shreya</div>
    </footer>
    </>
  );
};


{/**
Contact
It's fascinating how our industry is shaping the world's future, and how code gives us superpowers that we can use to do absolute wonders. Whether you want to discuss a potential collaboration, have a related question, or just want to chat about the latest developments, I'd love to hear from you! (Find my links in the footer ⬇️)

Then email and other contacts icon, (Add tooltip text when you hover : like "click to copy my emailID")
below those: ©️ Made with ❣️ by Shreya

https://www.figma.com/file/iCUyvxqhsBpHVHwMAfGIDa/Iconduck---Icons%2C-emojis%2C-illustrations-and-logos-(Community)?type=design&node-id=1-4&mode=design&t=tbOfbULluHuiHEsc-0
*/}
