import {MainLayouts} from "../../components/MainLayout";
import React from "react";
import {ArticleType} from "./index";

export default function Article({article}: propsType) {
    return (
        <MainLayouts pageTitle={'Статья'} keywords={'ключевые слова для статьи'}>
            <div>Название статьи: {article.title}</div>
            <div>{article.description}</div>
        </MainLayouts>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`http://localhost:3000/api/articles/${params.id}`)
    const article = await response.json()
    return {
        props: {article}
    }
}

type propsType = {
    article: ArticleType
}
