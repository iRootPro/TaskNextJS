import {MainLayouts} from "../../components/MainLayout";
import Link from "next/Link";

export default function Articles({articles}: propsType) {
    const content = articles.map(article => <li key={article.id}>
        <Link href={'/articles/[id]'} as={`/articles/${article.id}`}>
            <a>{article.title}</a>
        </Link>
    </li>)
    return (
        <MainLayouts pageTitle={'Статьи'} keywords={'статьи'}>
            <div>Список статей</div>
            <ul>
                {content}
            </ul>
        </MainLayouts>
    )
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/articles')
    const articles: Array<ArticleType> = await response.json()
    return {
        props: {articles},
    }
}

type propsType = {
    articles: Array<ArticleType>
}
export type ArticleType = {
    id: string
    title: string
    description: string
    image: string
}
