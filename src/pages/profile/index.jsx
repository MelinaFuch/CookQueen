import { useGetUserQuery } from "../../../redux/users/userApi";
import Image from "next/image";
import styles from "./profile.module.css";

function Profile  () {
    const { data: userInfo, isLoading, error } = useGetUserQuery('649f5a578c6eb1a2f6c5c6ed')
    const user = userInfo?.data;

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {console.log(error)}</div>

    return (
        <div className={styles.container}>
            <img
                className={styles.user_image}
                src={user.image}
                alt="User-Image"
                width={500}
                height={500}
            />
            <div className={styles.info_user}>
                <div className={styles.container_props}>
                    <h3 className={styles.prop_name}>Nombre de usuario:</h3>
                    <h3 className={styles.prop_mail}>Email:</h3>
                    <h3 className={styles.prop_password}>Contraseña:</h3>
                </div>
                <div className={styles.container_value}>
                    <div className={styles.container_name}>
                        <h3 className={styles.value_name}>{user.name}</h3>
                        <button className={styles.button_edit}>
                            <Image
                                className={styles.image_edit}
                                src={'/img/edit.jpg'}
                                alt="edit"
                                width={40}
                                height={40}
                            />
                        </button>
                    </div>
                    <div className={styles.container_mail}>
                        <h3 className={styles.value_mail}>{user.mail}</h3>
                        <button className={styles.button_edit}>
                            <Image
                                className={styles.image_edit}
                                src={'/img/edit.jpg'}
                                alt="edit"
                                width={50}
                                height={50}
                            />
                        </button>
                    </div>
                    <button className={styles.edit_password}>Cambiar contraseña</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;