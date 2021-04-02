import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Phone } from "../Assets/phone.svg";
import { ReactComponent as Email } from "../Assets/email.svg";
import { ReactComponent as Address } from "../Assets/location.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Contato</h2>
      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <Phone />
          <p>(11) 2844-2272</p>
        </div>
        <div className={styles.contactItem}>
          <Email />
          <p>contato@archoffice.tech </p>
        </div>
        <div className={styles.contactItem}>
          <Address />
          <p>
            Av. Marcos Penteado de Ulhoa Rodrigues, 939 Torre Jacarandá - 8°
            andar - Sala 835 - Tamboré Barueri - SP, 06460-040
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
