import React from "react";
import styles from "./Sidebar.module.css";
import { ReactComponent as User } from "../Assets/user.svg";
import { ReactComponent as Report } from "../Assets/report.svg";
import { ReactComponent as Content } from "../Assets/content.svg";
import { ReactComponent as Event } from "../Assets/events.svg";
import { ReactComponent as Service } from "../Assets/services.svg";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.listItem}>
            <User />
            <button>
              <p>Manutenção de usuários</p>
            </button>
          </li>
          <li className={styles.listItem}>
            <Report />
            <button>
              <p>Relatorios administrativos</p>
            </button>
          </li>
          <li className={styles.listItem}>
            <Content />
            <button>
              <p>Manutenção de conteúdos</p>
            </button>
          </li>
          <li className={styles.listItem}>
            <Event />
            <button>
              <p>Manutenção de eventos</p>
            </button>
          </li>
          <li className={styles.listItem}>
            <Service />
            <button>
              <p>Manutenção de serviços</p>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
