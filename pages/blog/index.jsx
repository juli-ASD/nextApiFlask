import Layout from "../../components/Layout";

export default function index({data}) {
    return (
        <Layout>
            <h1>Blog</h1>
            {
                data.map(({id_usuario, username, email}) => (
                    <div key={id_usuario}>
                        <h3>{id_usuario} - {username}</h3>
                        <p>{email}</p>
                    </div>
                ))
            }
        </Layout>
    )
}

export async function getStaticProps () {
    try {
        const res = await fetch('localhost:5000/hola')
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error)
    }
}
