import { useRouter } from 'next/router'

const Page = ({ dangerouslySetInnerHTML }) => {
    return <p>{dangerouslySetInnerHTML}</p>
}

Page.getInitialProps = async (ctx) => {
    const { page } = ctx.query
    const fullRoute = typeof page == 'array' ? `${page.join("/")}` : `/${page}`
    // Fetch to this website, to a public folder called public/docs that is served
    // statically.
    // This way we don't need SSR, the website can be static, open, and it doesn't
    // need file operations.
    const readOperation = await fetch(`http://localhost:3000/staticDocs/${fullRoute}.md`)
    return { dangerouslySetInnerHTML: readOperation }
}

export default Page