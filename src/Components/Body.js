import React from "react";
import styles from "./Body.module.css";
import Sidebar from "./Sidebar";
import User from "./UserMaintenance/User";

const Body = () => {
  return (
    <main className={styles.mainContainer}>
      <Sidebar />
      <User />
    </main>
  );
};

export default Body;
