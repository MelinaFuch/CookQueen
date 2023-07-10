import Image from "next/image";
import styles from "./NavBar.module.css";

function NavBar () {
    return (
        <nav className={styles.nav}>
            <div className={styles.container_logo}>
                <Image
                    className={styles.logo}
                    src="/img/cookqueen.jpg"
                    width={204}
                    height={68}
                    alt="logo"
                />
            </div>
            <div className={styles.nav_input}>
                <input
                    type="text"
                    placeholder="Busca ingredientes o recetas..."
                    maxLength="35"
                    autoComplete="off"
                    className={styles.input_text}
                />
                <Image
                    src="/img/buscar.png"
                    width={64}
                    height={64}
                    alt="lupa"
                    className={styles.lupa}
                />
            </div>
            <div>
                <Image
                    src="/img/barra-nav.svg"
                    width={118}
                    height={118}
                    alt="barra-nav"
                />
            </div>
        </nav>
    )
}

export default NavBar;