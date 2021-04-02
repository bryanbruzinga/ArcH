import React from "react";
import styles from "./Body.module.css";
import { ReactComponent as User } from "../Assets/user.svg";
import { ReactComponent as Report } from "../Assets/report.svg";
import { ReactComponent as Content } from "../Assets/content.svg";
import { ReactComponent as Event } from "../Assets/events.svg";
import { ReactComponent as Service } from "../Assets/services.svg";

const Body = () => {
  return (
    <main className={styles.mainContainer}>
      <button>
        <User />
      </button>
      <button>
        <Report />
      </button>
      <button>
        <Content />
      </button>
      <button>
        <Event />
      </button>
      <button>
        <Service />
      </button>
    </main>
  );
};

export default Body;
