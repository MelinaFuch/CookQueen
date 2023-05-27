import Image from 'next/image';
import Layout from '../../../components/Layout';

export default function Receta () {
    return (
        <Layout title='Receta' description='Arroz con pollo'>
            <h1>hola</h1>
            <Image 
                src="/img/arrozypollo.jpg"
                width={336}
                height={224}
                alt='Arroz con pollo'
            />
        </Layout>
    )
}