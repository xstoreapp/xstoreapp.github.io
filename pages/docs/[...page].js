import { useEffect } from 'react'
import md from 'marked'
import styles from '../../styles/Docs.module.css'

const Page = ({ dangerouslySetInnerHTML, fullRoute }) => {
    return <div className={styles.docsView}>
        <div className={styles.leftSideNav}>
            <a href="/docs/welcome">Welcome</a>
        </div>
        <div>
            <a href={`/staticDocs${fullRoute}.md`}>Markdown source</a>
            <div className={styles.markdownView} style={{whiteSpace: 'pre-wrap'}}
            dangerouslySetInnerHTML={dangerouslySetInnerHTML}></div>
        </div>
    </div>
}

Page.getInitialProps = async (ctx) => {
    const { page } = ctx.query
    const { req } = ctx
    const fullRoute = typeof page == 'array' ? `${page.join("/")}` : `/${page}`
    // Fetch to this website, to a public folder called public/docs that is served
    // statically.
    // This way we don't need SSR, the website can be static, open, and it doesn't
    // need file operations.
    const readOperation = await fetch(`http://${req.headers.host}/staticDocs${fullRoute}.md`)
    const text = await readOperation.text()
    const markdown = {__html: md(text)}
    return { dangerouslySetInnerHTML: markdown, fullRoute }
}

export default Page