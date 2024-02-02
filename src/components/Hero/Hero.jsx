import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Curriculo from '/curriculo.pdf'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, eu sou Thiago Suzuki</h1>
        <p className={styles.description}>
          Sou um Desenvolvedor Full Stack com experiência em Angular, Ionic, NextJS e NestJS. Entre em contato comigo se você quiser saber mais!
        </p>
        <div className={styles.contact}>
          {/* <a href="mailto:thiagoikenaga@gmail.com" className={styles.contactBtn}>
            Email
          </a> */}
          <a href={Curriculo} className={styles.contactBtn}>
            Currículo
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
