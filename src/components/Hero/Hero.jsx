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
          Desenvolvedor Full Stack com mais de 3 anos de experiência. Apaixonado por tecnologia, tenho como principal motivação resolver problemas reais e superar desafios técnicos com soluções eficientes e bem estruturadas. Atuo com foco em performance, escalabilidade e boa experiência do usuário, sempre buscando evoluir como profissional e contribuir com times de alta performance.
        </p>
        <div className={styles.contact}>
          {/* <a href="mailto:thiagoikenaga@gmail.com" className={styles.contactBtn}>
            Email
          </a> */}
          <a href={Curriculo} className={styles.contactBtn} target="_blank"a>
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
