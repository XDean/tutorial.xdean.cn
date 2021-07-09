import {DefaultLayout} from "../../../../components/layout/DefaultLayout";
import {Router, useRouter} from 'next/router'
import {TOC} from "../../../../components/TOC";
import {useEffect, useRef, useState} from "react";
import {Article} from "../../../../components/Article";
import Head from 'next/head'
import {AllTopics} from "../../../../components/topics/topics";
import {ArticleData, ArticleSet, Topic} from "../../../../components/topics/topic";

export default function Index() {
  const router = useRouter()
  const [topic, setTopic] = useState<Topic>()
  const [articleSet, setArticleSet] = useState<ArticleSet>()
  const [article, setArticle] = useState<ArticleData>()
  const articleContainerRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handler = () => {
      articleContainerRef.current?.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };
    Router.events.on('routeChangeComplete', handler);
    return () => Router.events.off('routeChangeComplete', handler)
  }, [article])

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
        <div className={
          'max-w-2/12 h-full border-r p-1 mr-2 overflow-auto ' +
          'hidden md:block'}>
          <TOC topic={topic} articleSet={articleSet} article={article}/>
        </div>
        <div className={'w-0 flex-grow h-full relative overflow-auto'}
             ref={articleContainerRef}
        >
          <Article topic={topic} articleSet={articleSet} article={article}/>
        </div>
      </div>
    </DefaultLayout>
  )
}