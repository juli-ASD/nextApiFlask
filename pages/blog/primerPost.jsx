import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function primerPost() {
    return (
        <div>

            <h1>Mi primer post juli ASD</h1>
            <Image
                src = "/img/puente.jpg"
                width = {600}
                height = {600}
                alt = "Imagen de puente"
                ></Image>
            <Link  href="/">
                <a>Volver al inicio</a>
            </Link>

        </div>
    )
}
