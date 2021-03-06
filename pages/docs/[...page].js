const Page = ({ dangerouslySetInnerHTML }) => {
    return <div style={{whiteSpace: 'pre-wrap'}}>{dangerouslySetInnerHTML}</div>
}

Page.getInitialProps = async (ctx) => {
    const { page } = ctx.query
    const fullRoute = typeof page == 'array' ? `${page.join("/")}` : `/${page}`
    // Fetch to this website, to a public folder called public/docs that is served
    // statically.
    // This way we don't need SSR, the website can be static, open, and it doesn't
    // need file operations.
    const readOperation = await fetch(`http://localhost:3000/staticDocs${fullRoute}.md`)
    return { dangerouslySetInnerHTML: await readOperation.text() }
}

export default Page