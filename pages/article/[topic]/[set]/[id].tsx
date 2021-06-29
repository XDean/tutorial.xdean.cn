import {DefaultLayout} from "../../../../components/layout/DefaultLayout";
import {useRouter} from 'next/router'
import {TOC} from "../../../../components/TOC";
import {useEffect, useState} from "react";
import {Article} from "../../../../components/Article";
import Head from 'next/head'
import {AllTopics} from "../../../../components/topics/topics";
import {ArticleData, ArticleSet, Topic} from "../../../../components/topics/topic";

export default function Index() {
  const router = useRouter()
  const [topic, setTopic] = useState<Topic>()
  const [articleSet, setArticleSet] = useState<ArticleSet>()
  const [article, setArticle] = useState<ArticleData>()

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    const {topic: topicId, set, id} = router.query
    const topic = AllTopics.find(e => e.id == topicId)
    const articleSet = topic?.articles.find(e => e.id === set)
    const article = articleSet?.articles.find(e => e.meta.id === id)

    if (!!article) {
      setTopic(topic)
      setArticleSet(articleSet)
      setArticle(article)
    } else {
      router.replace(`/`)
    }
  }, [router])

  if (!router.isReady || !topic || !articleSet || !article) {
    return null
  }

  const topicTitle = topic.title || `XDean的${topic.name}教程`

  return (
    <DefaultLayout topbar={{
      title: topicTitle,
      left: <topic.Icon/>,
      ...topic.topbar
    }}>
      <Head>
        <title>{article.meta.name} | {topicTitle}</title>
      </Head>
      <div className={'w-full h-full flex flex-row items-center'}>
        <div className={'max-w-2/12 h-full border-r p-1 mr-2 overflow-auto'}>
          <TOC topic={topic} articleSet={articleSet} article={article}/>
        </div>
        <div className={'w-0 flex-grow h-full relative overflow-auto'}>
          <Article topic={topic} articleSet={articleSet} article={article}/>
        </div>
      </div>
    </DefaultLayout>
  )
}