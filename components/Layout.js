import Head from "next/head"
import styles from "./layout.module.css"
import utils from "../styles/utils.module.css"
import Link from "next/link"

const name = "Yamato";
export const siteTitle = "Next.js Portfolio"
function layout({children,home}) {
    return (
        <div className={styles.wrapper}>
            <Head>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <div className={styles.headerWrapper}>
                <h1 className={styles.headerText}>Yama's Portfolio</h1>
                <div className={styles.iconWrapper}>
                    <a href="https://github.com/yamato0211">
                        <img src="/images/github.png" alt="github" className={`${styles.icon} ${styles.git}`}/>
                    </a>
                    <a href="https://twitter.com/__yamayama1115">
                        <img src="/images/twitter-icon.jpg" alt="twitter" className={styles.icon}/>
                    </a>
                </div>
            </div>
            <div className={styles.container}>
                <header className={styles.header}>

                    {home ? (
                        <>
                            <img src="/images/profile.jpg"
                                className={`${utils.borderCircle} ${styles.headerHomeImage}`}/>
                            <h1 className={utils.headingXl}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <img src="/images/profile.jpg"
                                className={`${utils.borderCircle} ${styles.headerImage}`}/>
                            <h1 className={utils.headingXl}>{name}</h1>
                        </>
                    )}
                    
                </header>
                <main>{children}</main>
                {
                    !home && (
                        <div className={utils.Back}>
                            <Link href="/">Back to Home</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default layout;