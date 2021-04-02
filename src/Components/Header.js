import React from "react";
import styles from "./Header.module.css";
import Logo from "../Assets/logo.png";
import { ReactComponent as LogOut } from "../Assets/logout.svg";
import { ReactComponent as Notification } from "../Assets/notification.svg";
import { ReactComponent as Search } from "../Assets/search.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={Logo} alt="ArchOffice" />
      </Link>
      <div className={styles.searchBar}>
        <label htmlFor="Search">
          <button className={styles.search}>
            <Search />
          </button>
          <input type="text" name="search" placeholder="Busca" />
        </label>
      </div>
      <div className={styles.buttons}>
        <button className={styles.notification}>
          <Notification />
        </button>
        <button className={styles.logout}>
          <LogOut />
        </button>
      </div>
    </header>
  );
};

export default Header;
