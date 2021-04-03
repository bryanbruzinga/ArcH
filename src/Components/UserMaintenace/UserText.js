import React from "react";
import styles from "./UserText.module.css";

const UserText = () => {
  return (
    <div className={styles.card}>
      <div className={styles.titleText}>
        <h2>Opção 1</h2>
      </div>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus.
      </p>
    </div>
  );
};

export default UserText;
