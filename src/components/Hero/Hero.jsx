import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shashwat</h1>
        <p className={styles.description}>
  I'm a backend Java developer with experience in building scalable applications using Java and Spring Boot. I specialize in creating RESTful APIs and optimizing application performance. Feel free to reach out if you'd like to learn more!
</p>

        <a href="mailto:shashwatsingh3104@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
