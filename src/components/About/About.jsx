import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/kgjx.jpg")}
          alt="Shashwat Singh sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Programming icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>Skilled in front-end and back-end development using Spring Boot, React, and Machine Learning.</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>Experience with Spring Boot, Hibernate ORM, and API development.</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Data Science icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Science Enthusiast</h3>
              <p>Expertise in EDA, machine learning, and statistical modeling.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
