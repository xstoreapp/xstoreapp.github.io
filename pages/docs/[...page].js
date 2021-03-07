import { useEffect } from 'react'
import md from 'marked'
import styles from '../../styles/Docs.module.css'

const routes = [
    {
        route: '/docs/welcome',
        simplified: 'Welcome'
    }
]

const Page = ({ dangerouslySetInnerHTML }) => {
    return <div className={styles.docsView}>
        <div className={styles.leftSideNav}>
            {
                routes.map((val, index, arr) => {
                    return <a href={val.route}>{val.simplified}</a>
                })
            }
        </div>
        <div>
            <a href={`/staticDocs${fullRoute}.md`}>Markdown source</a>
            <div className={styles.markdownView} style={{whiteSpace: 'pre-wrap'}}
            dangerouslySetInnerHTML={dangerouslySetInnerHTML}></div>
        </div>
    </div>
}

export default Page

export const getStaticProps = async() => {
    const { readdir, readFile } = require('fs/promises')
    // Fetch to this website, to a public folder called public/docs that is served
    // statically.
    // This way we don't need SSR, the website can be static, open, and it doesn't
    // need file operations.
    const dirs = await readdir(process.cwd() + '/public/staticDocs')
    dirs.map(async(val, index, arr) => {
        const readOperation = await readFile(process.cwd() + `/public/staticDocs/${val}`)
        const markdown = {__html: md(readOperation.toString())}
        return { props: { dangerouslySetInnerHTML: markdown } }
    })
}

export const getStaticPaths = () => {
    let rtsOnlyRoute = []
    for (let index = 0; index < routes.length; index++) {
        const element = routes[index].route;
        rtsOnlyRoute = [...rtsOnlyRoute, element]
    }
    return { paths: rtsOnlyRoute, fallback: false }
}