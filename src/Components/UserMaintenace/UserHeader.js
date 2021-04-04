import React from "react";
import styles from "./UserHeader.module.css";

const UserHeader = () => {
  return (
    <header className={styles.userHeader}>
      <div className={styles.titles}>
        <h2>Olá Usuário, Bem Vindo!</h2>
      </div>
    </header>
  );
};

export default UserHeader;
