import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/Layout'
import utils from "../styles/utils.module.css"
import { getPostsData } from '../lib/post'

//SSG
export async function getStaticProps() {
  const allPostsData = getPostsData(); //{id,title,date,thumbnail}
  return{
    props:{
      allPostsData,
    }
  }
}

//SSR
// export async function getServerSideProps(context) {
//   return{
//     props: {
//       //componentに渡す。
//     }
//   }
// }


export default function Home({allPostsData}) {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utils.headingMd}>
        <p className={utils.introduce}>
          kit B2(AI), 好きな言語: JavaScript(React,Next) Python   
        </p>
      </section>

      <section className={utils.center}>
        <h2 className={utils.work}>💻 Works</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id,title,date,thumbnail}) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                  <img src={`${thumbnail}`} 
                  className={styles.thumbnailImage}
                  />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utils.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utils.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>

      
    </Layout>
  )
}
