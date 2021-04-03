import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./User.module.css";
import UserText from "./UserText";

const User = () => {
  return (
    <div className={styles.container}>
      <header className={styles.userHeader}>
        <h1>Manutenção do Usuário</h1>
        <Dropdown />
      </header>
      <div className={styles.card}>
        <UserText />
      </div>
    </div>
  );
};

export default User;
