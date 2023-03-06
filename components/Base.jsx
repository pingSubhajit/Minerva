import Head from "next/head"

const Base = ({children}) => (
    <div>
        <Head>
            <title>Figure it out</title>
            <link rel="icon" href="/logo/icon.png" />
        </Head>

        <div className="main_container">
            { children }
        </div>
    </div>
)

export default Base