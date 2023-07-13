import { useGetUserQuery } from "../../../redux/users/userApi";
import Image from "next/image";
import styles from "./profile.module.css";

function Profile  () {
    const { data: userInfo, isLoading, error } = useGetUserQuery('649f5a578c6eb1a2f6c5c6ed')
    const user = userInfo?.data;

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {console.log(error)}</div>
    return (
        <div>
            <img
                src={user.image}
                alt="User-Image"
                width={400}
                height={400}
            />
            <h3>Nombre de usuario:</h3>
            <h3>{user.name}</h3>
            <button>
                <Image
                    src={'/img/edit.jpg'}
                    alt="edit"
                    width={40}
                    height={40}
                />
            </button>
            <h3>Email:</h3>
            <h3>{user.mail}</h3>
            <button>
                <Image
                    src={'/img/edit.jpg'}
                    alt="edit"
                    width={40}
                    height={40}
                />
            </button>
            <h3>Contraseña:</h3>
            <button>Cambiar contraseña</button>
        </div>
    )
}

export default Profile;