import Image from "next/image";
import styles from "./NavBar.module.css";
import Search from "../Search/Search";
import Menu from "../Menu/Menu";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.container_logo}>
        <Image
          className={styles.logo}
          src="/img/cookqueen2.jpeg"
          width={204}
          height={68}
          alt="logo"
        />
      </div>
      <Search />
      {/* <div>
        <button
          onClick={(event) => handleClickMenu(event)}
          className={styles.button_menu}
        >
          <Image
            src="/img/menu-nav.svg"
            width={118}
            height={118}
            alt="menu-nav"
            className={styles.image}
          />
        </button>
      </div> */}
      <Menu />
    </nav>
  );
}

export default NavBar;
