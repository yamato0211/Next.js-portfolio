import path from "path";
import fs from "fs"
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html"

const postsDirectory = path.join(process.cwd(),"posts");

//mdファイルのデータを取り出す
export function getPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/,""); //idにファイル名を代入

        //mdファイルを読み取る
        const fullPath = path.join(postsDirectory,fileName);
        const fileContents = fs.readFileSync(fullPath,"utf-8")

        const matterResult = matter(fileContents);
        return{
            id,
            ...matterResult.data,
        }
    })

    return allPostsData;
}

//getStaticPath
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return{
            params:{
                id: fileName.replace(/\.md$/,""),
            }
        }
    })

    /*
      [
          {
              params:{
                  id : path1,
              }
          },
          {
              params:{
                  id: path2,
              }
          }
      ]
    */
}

//mdfileの内容
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory,`${id}.md`);
    const fileContent = fs.readFileSync(fullPath,"utf-8")
    
    const matterResult = matter(fileContent)

    const Content = await remark().use(html).process(matterResult.content);

    const ContentHTML = Content.toString();

    return{
        id,
        ContentHTML,
        ...matterResult.data,
    }
}