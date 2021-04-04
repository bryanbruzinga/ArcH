import React from "react";
import GridCrud from "../Grid/GridCrud";
import styles from "./User.module.css";
import UserHeader from "./UserHeader";
import UserText from "./UserText";
import Dropdown from "../Dropdown/Dropdown";
import UserButtons from "./UserButtons";

const User = () => {
  return (
    <div className={styles.container}>
      <UserHeader />
      <div className={styles.crudBodyContainer}>
        <div className={styles.crudHeader}>
          <h2>Manutenção do Usuário</h2>
          <UserText />
          <Dropdown />
        </div>
        <GridCrud />
        <UserButtons />
      </div>
    </div>
  );
};

export default User;
