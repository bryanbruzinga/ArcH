import React from "react";
import styles from "./User.module.css";
import UserHeader from "./UserHeader";
import UserText from "./UserText";

const User = () => {
  return (
    <div className={styles.container}>
      <UserHeader />
      <div className={styles.cardContainer}>
        <div className={styles.cardText}>
          <UserText />
        </div>
      </div>
    </div>
  );
};

export default User;
