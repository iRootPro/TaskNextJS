import Link from "next/Link";
import Head from "next/head";
import Menu from "./Menu";

export function MainLayouts({children, pageTitle = 'NextJS', keywords}: propsType) {
    return (
        <>
            <Head>
                <title>Тестовое задание | {pageTitle}</title>
                <meta name="keywords" content={`NextJS, ${keywords}`}/>
            </Head>
            <nav>
                <Menu/>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}

type propsType = {
    children: JSX.Element | Array<JSX.Element>
    pageTitle: string
    keywords: string
}
