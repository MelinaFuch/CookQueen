import Image from "next/image";
import styles from "./NavBar.module.css";
import Search from "../Search/Search";

function NavBar() {
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
    </nav>
  );
}

export default NavBar;
