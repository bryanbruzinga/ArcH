import React from "react";
import styles from "./Sidebar.module.css";
import { ReactComponent as User } from "../Assets/user.svg";
import { ReactComponent as Report } from "../Assets/report.svg";
import { ReactComponent as Content } from "../Assets/content.svg";
import { ReactComponent as Event } from "../Assets/events.svg";
import { ReactComponent as Service } from "../Assets/services.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [painelRecuado, setpainelRecuado] = React.useState(false);

  function handleOpenPanel() {
    setpainelRecuado(!painelRecuado);
    document.querySelector("nav").style.width = "250px";
    document.querySelector("nav").style.zIndex = "0";
  }

  function handleClosePanel() {
    setpainelRecuado(!painelRecuado);
    document.querySelector("nav").style.width = "0";
    document.querySelector("nav").style.zIndex = "-2";
  }

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.listItem}>
            <User />
            <Link to="/pagina">
              <p className={styles.active}>Manutenção de usuários</p>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Report />
            <a href="/">
              <p>Relatorios administrativos</p>
            </a>
          </li>
          <li className={styles.listItem}>
            <Content />
            <a href="/">
              <p>Manutenção de conteúdos</p>
            </a>
          </li>
          <li className={styles.listItem}>
            <Event />
            <a href="/">
              <p>Manutenção de eventos</p>
            </a>
          </li>
          <li className={styles.listItem}>
            <Service />
            <a href="/">
              <p>Manutenção de serviços</p>
            </a>
          </li>
        </ul>
        <button onClick={handleClosePanel} className={styles.panelOpen}>
          🠔
        </button>
      </nav>
      {painelRecuado && (
        <button onClick={handleOpenPanel} className={styles.panelClosed}>
          ➔
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
