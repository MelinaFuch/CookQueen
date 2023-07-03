import styles from "@/styles/LandingPage.module.css";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {

  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <div className={styles.left}>
          <div className={styles.container__title}>
            <Image
              className={styles.logo}
              src="/img/logo.png"
              width={24}
              height={37}
              alt="Logo"
            />
            <h1 className={styles.title}>COOKQUEEN</h1>
          </div>
          <h3 className={styles.text}>
            ¡Hola! En este sitio encontrarás deliciosas recetas de todo tipo
            creadas por una madre imaginativa y creativa. Además, puedes
            contactar a esta talentosa persona para pedirle consejos o encargar
            alguna comida o receta en particular.
            ¡Disfruta y que tengas una buena cocción!
          </h3>
          <div className={styles.container__button_aCocinar}>
            <button className={styles.button_aCocinar}>
              <Link href="/home">A COCINAR!</Link>
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.container__button_login}>
            <button className={styles.button_login}>
              <Link href="/login">INICIAR SESIÓN</Link>
            </button>
          </div>
          <div className={styles.container__image}>
            <Image
              className={styles.image}
              src="/img/landing.jpg"
              width={305}
              height={221}
              alt="MamiCocina"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
