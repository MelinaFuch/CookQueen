import Head from "next/head";
import NavBar from "../src/pages/NavBar/NavBar"

export default function Layout ({children, title, description}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Head>
            {/* <NavBar/> */}
            <main>{children}</main>
            {/* <footer>Footer</footer> */}
        </div>
    )
}

Layout.defaultProps = {
    title: 'CookQueen',
    description: 'App de cocina con mucho amor <3'
}