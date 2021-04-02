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
          <p>
            <a href="tel:+551128442272">(11) 2844-2272</a>
          </p>
        </div>
        <div className={styles.contactItem}>
          <Email />

          <p>
            <a href="mailto:contato@archoffice.tech">contato@archoffice.tech</a>
          </p>
        </div>
        <div className={styles.contactItem}>
          <Address />
          <p>
            <a href="https://g.page/Castelo-Branco-Office-Park-4425?share">
              Av. Marcos Penteado de Ulhoa Rodrigues, 939 Torre Jacarandá - 8°
              andar - Sala 835 - Tamboré Barueri - SP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
