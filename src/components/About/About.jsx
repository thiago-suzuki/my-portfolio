import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/local.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Local</h3>
              <p>
                Atualemte, sou residente em Santos-SP
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/hatIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Graduação</h3>
              <p>
                Formado em Bacharelado de Sistemas de Informação na Universidade Santa Cecília na cidade de Santos-SP
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/notebookIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Front-End</h3>
              <p>
                Sou um desenvolvedor front-end com experiência em criação de sites para a web e mobile.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Back-End</h3>
              <p>
                Como desenvolvedor back-end, crio APIs e struturo tabelas em banco de dados de acordo com as regras de negócio
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
