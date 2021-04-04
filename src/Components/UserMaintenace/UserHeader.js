import React from "react";
import styles from "./UserHeader.module.css";

const UserHeader = () => {
  return (
    <header className={styles.userHeader}>
      <h2>Olá Usuário, Bem Vindo!</h2>
    </header>
  );
};

export default UserHeader;
