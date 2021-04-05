import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  const [enableMenu, setEnableMenu] = React.useState(false);

  const opcoes = [
    {
      value: 1,
      label: "Opção 1",
    },
    {
      value: 2,
      label: "Opção 2",
    },
    {
      value: 3,
      label: "Opção 3",
    },
  ];

  function handleDropdown() {
    setEnableMenu(!enableMenu);
  }

  return (
    <div className={styles.dropdown}>
      <button onClick={handleDropdown} className={styles.btnDropdown}>
        Opções ᐁ
      </button>
      <div className={styles.dropdownContent}>
        {enableMenu &&
          opcoes.map((item) => (
            <Link to="/" key={item.value} href="/">
              {item.label}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
