import styles from '/styles/pages/404.module.scss'
import Link from "next/link"
import Head from "next/head"

const NotFound = () => {
    return (
        <div className={styles.main_container}>
            <Head>
                <title>CTMela | Page not found</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="This page could not be found. Sorry, the page you had requested could not be found. We apologize for any inconveniences."/>
            </Head>

            <div className={styles.side_container}>
                <h1 className={styles.main_heading}>This page could not be found</h1>
                <p className={styles.description}>This can happen dure to many reason. Probably this page didn't exist in the first place or what was there in this page has been moved or deleted. If you think this is a mistake, please consider contacting us.</p>
                <Link href="/"><button className="button">Head back to home</button></Link>
            </div>
            <div className={styles.side_container}>
                <img className={styles.main_image} src="/illustrations/404.svg" alt="error 404"/>
            </div>
        </div>
    )
}

export default NotFound