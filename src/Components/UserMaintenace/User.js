import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./User.module.css";
import UserText from "./UserText";

const User = () => {
  return (
    <div className={styles.container}>
      <header className={styles.userHeader}>
        <div className={styles.titles}>
          <h1>Manutenção do Usuário</h1>
          <h2>Olá usuário, Bem Vindo!</h2>
        </div>
        <Dropdown />
      </header>
      <div className={styles.cardText}>
        <UserText />
      </div>
    </div>
  );
};

export default User;
