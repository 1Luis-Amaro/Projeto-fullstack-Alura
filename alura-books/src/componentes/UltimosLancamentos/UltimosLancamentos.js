import React from "react";
import { livros } from "./DadosUltimosLancamentos";
import styles from './UltimosLancamentos.module.css'

const UltimosLancamentos = () => {
  return (
    <section className={styles.container} >
      <h2 className={styles.lancamentos} >ULTIMOS LANCAMENTOS</h2>
      {livros.map((livro) => (
        <img className={styles.livro} src={livro.src}  />
      ))}
    </section>
  );
};

export default UltimosLancamentos;
