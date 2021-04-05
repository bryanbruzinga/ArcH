import React from "react";
import styles from "./UserButtons.module.css";

const UserButtons = () => {
  return (
    <div className={styles.btnActions}>
      <button className={styles.btnAdd}>Adicionar</button>
      <button>Salvar</button>
      <button>Cancelar</button>
    </div>
  );
};

export default UserButtons;
