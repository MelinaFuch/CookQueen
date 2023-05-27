import styles from '@/styles/LandingPage.module.css';
import Image from 'next/image';
import Link from 'next/link';


export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.container__div}>
        <div className={styles.button_container}>
          <button className={styles.button_container__button}><Link href="/login">INICIAR SESIÓN</Link></button>
        </div>
        <div className={styles.logo_container}>
          <Image
            className={styles.logo}
            src="/img/logo.png"
            width={24}
            height={37}
            />
        </div>
        <div className={styles.h1_container}>
          <h1 className={styles.h1}>COOKQUEEN</h1>
        </div>
        <div className={styles.h3_container}>
          <h3 className={styles.h3}>
          ¡Hola! En este sitio encontrarás deliciosas recetas de todo tipo creadas por una madre imaginativa y creativa. Además, puedes contactar a esta talentosa persona para pedirle consejos o encargar alguna comida o receta en particular. 
          </h3>
          <h3 className={styles.h3}>¡Disfruta y que tengas una buena cocción!</h3>
        </div>
        <div className={styles.image_container}>
          <Image
            className={styles.image}
            src="/img/landing.jpg"
            width={305}
            height={221}
            alt='MamiCocina'
          />
        </div>
        <div className={styles.button_snd_container}>
          <button className={styles.button_snd}><Link href="/home">A COCINAR!</Link></button>
        </div>
      </div>
    </div>
  )
}