import Image from 'next/image';
import styles from './Search.module.css';

export default function Search () {
    return (
        <div className={styles.container}>
            <div className={styles.search_container}>
                <input 
                    className={styles.search}
                    type="text"
                    placeholder="Busca ingredientes o recetas..."
                    // value={searchTerm}
                    // onChange={handleSearch}
                />
                <button className={styles.button}>
                    <Image
                        className={styles.image_buscar}
                        src='/../public/img/buscar.png'
                        width={30}
                        height={30}
                    />
                </button>
            </div>
            {/* <div className={styles.button_container}>
            </div> */}
        </div>
    )
}