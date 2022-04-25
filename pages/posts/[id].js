import Layout from "../../components/Layout"
import { getAllPostIds, getPostData } from "../../lib/post";
import utils from "../../styles/utils.module.css"
import Head from "next/head";

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return{
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id);

    return{
        props:{
            postData,
        }
    }
}

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={`${utils.headingX1} ${utils.center}`}>{postData.title}</h1>
                <div className={`${utils.lightText} ${utils.centerDate}`}>{postData.date}</div>
                <div dangerouslySetInnerHTML={{__html: postData.ContentHTML}} className={utils.center}/>
            </article>
        </Layout>
    );
}