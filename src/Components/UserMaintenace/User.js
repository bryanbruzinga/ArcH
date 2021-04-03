import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./User.module.css";
import UserText from "./UserText";

const User = () => {
  return (
    <div className={styles.container}>
      <h1>Manutenção do Usuário</h1>
      <UserText />
      <Dropdown />
    </div>
  );
};

export default User;
