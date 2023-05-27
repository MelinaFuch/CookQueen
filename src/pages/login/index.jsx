import Image from 'next/image';
import styles from './Login.module.css';

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.container_color}>
                <div className={styles.titles}>
                    <div className={styles.logo_container}>
                        <Image
                            className={styles.logo}
                            src='/img/logo-color.jpg'
                            width={34}
                            height={47}
                        />
                    </div>
                    <h1 className={styles.h1}>¡BIENVENIDX!</h1>
                    <h2 className={styles.h2}>¡Regístrate para ver recetas increíbles y deliciosas!</h2>
                </div>
                <div className={styles.form}>
                    <h3 className={styles.form_name}>Correo electrónico</h3>
                    <input className={styles.form_input} type="text" placeholder='Correo electrónico' />
                    <h3 className={styles.form_name}>Contraseña</h3>
                    <input className={styles.form_input} type="password" placeholder='Contraseña' />
                </div>
                <div className={styles.button_container}>
                    <button className={styles.button}>INICIAR SESIÓN</button>
                </div>
            </div>
        </div>
    )
}