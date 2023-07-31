import Image from "next/image";
import styles from "./Menu.module.css";
import { useState } from "react";
import Link from "next/link";

function Menu({ isOpen, handleClickMenu }) {
  // const [isOpen, setIsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  // const handleClickMenu = (event) => {
  //   event.preventDefault();
  //   setIsOpen(!isOpen);
  // };
  const handleClickCategories = (event) => {
    event.preventDefault();
    setCategoriesOpen(!categoriesOpen);
  };

  return (
    <div className={styles.container_menu}>
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
          <ul className={styles.lista_menu}>
            <li>
              <Link href={"/profile"}>Perfil</Link>
            </li>
            <hr className={styles.linea} />
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

            <hr className={styles.linea} />

            <li>Favoritos</li>
            <hr className={styles.linea} />

            <li>Novedades</li>
            <hr className={styles.linea} />

            <li>Escribinos</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Menu;

// <div className={styles.container_close}>
// {/* <button
//   className={styles.button_closeMenu}
//   onClick={(event) => handleClickMenu(event)}
// > */}
// {/* <Image
//   src="/img/menu-nav.svg"
//   width={118}
//   height={118}
//   alt="menu-nav"
//   className={styles.image}
// /> */}
// {/* </button> */}
// </div>
// )}
// {/* </div> */}
