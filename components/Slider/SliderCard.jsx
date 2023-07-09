import Link from "next/link";
import styles from "./Slider.module.css";

export default function slider({ recipe, key }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link href="/">
          <img className={styles.image} src={recipe.image} alt={recipe.name} />
        </Link>
        <h1 className={styles.title}>{recipe.title}</h1>
        {/* <div className={styles.container_button}> */}
        {/* <button className={styles.button}>Ver receta</button> */}
        {/* </div> */}
      </div>
    </div>
  );
}
