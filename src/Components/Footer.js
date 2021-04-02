import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Contato</h2>
      <p>(11) 2844-2272</p>
      <p>contato@archoffice.tech </p>
      <p>
        Av. Marcos Penteado de Ulhoa Rodrigues, 939 Torre Jacarandá - 8° andar -
        Sala 835 - Tamboré Barueri - SP, 06460-040
      </p>
    </footer>
  );
};

export default Footer;
