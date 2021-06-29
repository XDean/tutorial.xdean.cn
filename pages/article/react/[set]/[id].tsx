import {DefaultLayout} from "../../../../components/layout/DefaultLayout";
import {useRouter} from 'next/router'
import {TOC} from "../../../../components/TOC";
import {useEffect} from "react";
import {Article} from "../../../../components/Article";
import {ReactArticles} from "../../../../components/topics/react/articles/article";
import Head from 'next/head'

export default function Index() {
  const router = useRouter()
  const {set, id} = router.query
  const articleSet = ReactArticles.find(e => e.id === set) || ReactArticles[0]
  const article = articleSet.articles.find(e => e.meta.id === id) || articleSet.articles[0]
  useEffect(() => {
    if (router.isReady && (set !== articleSet.id || id !== article.meta.id)) {
      router.replace(`/article/react/${articleSet.id}/${article.meta.id}`, undefined, {shallow: true})
    }
  }, [router.isReady, id, article.meta.id])

  if (!router.isReady) {
    return null
  }

  return (
    <DefaultLayout>
      <Head>
        <title>{article.meta.title ?? article.meta.name} | XDean的React教程</title>
      </Head>
      <div className={'w-full h-full flex flex-row items-center'}>
        <div className={'max-w-2/12 h-full border-r p-1 mr-2 overflow-auto'}>
          <TOC articleSet={articleSet} article={article}/>
        </div>
        <div className={'w-0 flex-grow h-full relative overflow-auto'}>
          <Article articleSet={articleSet} article={article}/>
        </div>
      </div>
    </DefaultLayout>
  )
}