import React from "react";
import styles from "./UserButtons.module.css";

const UserButtons = () => {
  return (
    <div className={styles.btnActions}>
      <div className={styles.btnControl}>
        <button>Salvar</button>
        <button>Cancelar</button>
      </div>
      <div className={styles.btnCrud}>
        <button className={styles.btnView}>Vizualizar</button>
        <button className={styles.btnEdit}>Editar</button>
        <button className={styles.btnDelete}>Excluir</button>
      </div>
    </div>
  );
};

export default UserButtons;
