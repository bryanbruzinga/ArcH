import React from "react";
import GridCrud from "../Grid/GridCrud";
import styles from "./User.module.css";
import UserHeader from "./UserHeader";
import UserText from "./UserText";
import Dropdown from "../Dropdown/Dropdown";

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
      </div>
    </div>
  );
};

export default User;
