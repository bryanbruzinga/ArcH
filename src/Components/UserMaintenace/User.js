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
        <h2>Manutenção do Usuário</h2>
        <Dropdown />
        <UserText />
        <GridCrud />
        <div className={styles.btnActions}>
          <button className={styles.btnView}>Vizualizar</button>
          <button className={styles.btnEdit}>Editar</button>
          <button className={styles.btnDelete}>Excluir</button>
        </div>
      </div>
      <div className={styles.btnControl}>
        <button>Salvar</button>
        <button>Cancelar</button>
      </div>
    </div>
  );
};

export default User;
