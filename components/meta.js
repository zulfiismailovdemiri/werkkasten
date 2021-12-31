import Head from 'next/head'

export default function Meta() {
    return (
        <Head>
            <link
                rel="icon"
                type="image/svg+xml"
                href="favicon.svg"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
            />
            <meta
                name="description"
                content="Innovativ und digital. Digitale Agentur. Werbeagentur. Umsetzung von Webseiten und Shops. Innovative Wege zur erfolgreiche Digitalisierung."
            />
        </Head>
    )
}