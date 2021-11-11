import Head from "next/head";
import { Children } from "react";
import styles from '../styles/Layout.module.css'

export default function Layout({children, title, description}) {
    return (
        <div className = {styles.container}>

            <Head>
                <title>{title}</title>
                <meta name = "description" content = {description}/>
            </Head>

            <nav>navbar</nav>

            <main>{children}</main>

            <footer>footer</footer>

        </div>
    )
}

Layout.defaultProps = {
    title: "Next.js | Juli ASD",
    description: "Descripcion de web site",
}