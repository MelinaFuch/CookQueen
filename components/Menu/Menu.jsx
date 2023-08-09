import Image from "next/image";
import styles from "./Menu.module.css";
import { useState } from "react";
import Link from "next/link";
import Search from "../Search/Search";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const handleClickMenu = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };
  const handleClickCategories = (event) => {
    event.preventDefault();
    setCategoriesOpen(!categoriesOpen);
  };

  return (
    <div className={styles.container_menu}>
      {/* <div
        className={`${styles.container_open} ${isOpen ? styles.open : ""} ${
          isOpen ? styles.fixed : styles.absolute
        }`}
      > */}
      {isOpen ? (
        <div className={styles.container_open}>
          <button
            className={styles.button_openMenu}
            onClick={(event) => handleClickMenu(event)}
          >
            <Image
              src="/img/closeMenu1.png"
              width={118}
              height={118}
              alt="menu-nav"
              className={styles.image_prueba}
            />
          </button>
          <ul
            className={`${styles.lista_menu} ${
              isOpen ? styles.menu_open : ""
            } `}
          >
            <div>
              <Search menus={true} />
            </div>
            <li>
              <Link href={"/profile"}>Perfil</Link>
            </li>
            <hr className={`${isOpen ? styles.linea : styles.no_line}`} />
            {categoriesOpen ? (
              <div className={styles.container_categorias}>
                <p onClick={(event) => handleClickCategories(event)}>
                  Categorías ^
                </p>
                <ul className={styles.lista_categorias}>
                  <li>Dulce</li>
                  <li>Agridulce</li>
                  <li>Salado</li>
                  <li>Desayuno/Merienda</li>
                  <li>Almuerzo</li>
                  <li>Vegetariano</li>
                  <li>Carnes</li>
                  <li>Pasta</li>
                  <li>Panes</li>
                  <li>Postres</li>
                  <li>Para mascotas</li>
                </ul>
              </div>
            ) : (
              <p onClick={(event) => handleClickCategories(event)}>
                Categorías v
              </p>
            )}

            <hr className={`${isOpen ? styles.linea : styles.no_line}`} />

            <li>Favoritos</li>
            <hr className={`${isOpen ? styles.linea : styles.no_line}`} />

            <li>Novedades</li>
            <hr className={`${isOpen ? styles.linea : styles.no_line}`} />

            <li>Escribinos</li>
          </ul>
        </div>
      ) : (
        <div className={styles.container_close}>
          <button
            className={styles.button_openMenu}
            onClick={(event) => handleClickMenu(event)}
          >
            ''
            <Image
              src="/img/menu-nav.svg"
              width={118}
              height={118}
              alt="menu-nav"
              className={styles.image_prueba}
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
