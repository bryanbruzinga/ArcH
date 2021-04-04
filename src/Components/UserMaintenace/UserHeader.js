import React from "react";
import styles from "./UserHeader.module.css";

const UserHeader = () => {
  return (
    <header className={styles.userHeader}>
      <div className={styles.titles}>
        <h1>Manutenção do Usuário</h1>
        <h2>Olá usuário, Bem Vindo!</h2>
      </div>
    </header>
  );
};

export default UserHeader;
