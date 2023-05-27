import Link from "next/link";

export default function NavBar () {
    return (
        <nav>
            <Link href='/inicio'>Inicio</Link>
            <Link href='/'>Volver</Link>
            <Link href='/inicio/receta'>Receta</Link>

            {/*
            <Link href='/'>Inicio</Link>
            <Link href='/perfil'>Perfil</Link>
            <Link href='/categorias'>Categorías</Link>
            <Link href='/favoritos'>Favoritos</Link>
            <Link href='/novedades'>Novedades</Link>
            <Link href='/escribinos'>Escribinos</Link>
            */}
        </nav>
    )
}