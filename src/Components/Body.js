import React from "react";
import styles from "./Body.module.css";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <main className={styles.mainContainer}>
      <Sidebar />
    </main>
  );
};

export default Body;
