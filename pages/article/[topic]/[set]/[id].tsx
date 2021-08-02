import {DefaultLayout} from "../../../../components/layout/DefaultLayout";
import {Router, useRouter} from 'next/router'
import {TOC} from "../../../../components/TOC";
import {useEffect, useRef, useState} from "react";
import {Article} from "../../../../components/Article";
import Head from 'next/head'
import {AllTopics} from "../../../../components/topics/topics";
import {ArticleData, ArticleLocale, ArticleSet, getLocaleArticleSets, Topic} from "../../../../components/topics/topic";
import clsx from "clsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useLocale} from "../../../../components/util/hooks";

export default function Index() {
  const router = useRouter()
  const locale = useLocale()
  const [topic, setTopic] = useState<Topic>()
  const [localArticleSets, setLocaleArticleSets] = useState<ArticleLocale>()
  const [articleSet, setArticleSet] = useState<ArticleSet>()
  const [article, setArticle] = useState<ArticleData>()
  const [openToc, setOpenToc] = useState(false)
  const articleContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    const {topic: topicId, set, id} = router.query
    const topic = AllTopics.find(e => e.id == topicId)
    if (!topic) {
      router.replace(`/`)
      return
    }
    const localeArticleSets = getLocaleArticleSets(topic, locale)
    const articleSet = localeArticleSets.sets.find(e => e.id === set)
    const article = articleSet?.articles.find(e => e.meta.id === id)

    if (!!article) {
      setTopic(topic)
      setLocaleArticleSets(localeArticleSets)
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

  if (!router.isReady || !topic || !localArticleSets || !articleSet || !article) {
    return null
  }

  const topicTitle = topic.title || `XDean的${topic.name}教程`

  return (
    <DefaultLayout topbar={{
      title: topicTitle,
      left: <topic.Icon/>,
      locales: topic.articles.map(e => e.locale || 'zh')
    }}>
      <Head>
        <title>{article.meta.name} | {topicTitle}</title>
      </Head>
      <div className={'w-full h-full flex flex-row items-center'}>
        <div className={clsx(
          'max-w-2/12 h-full border-r p-1 mr-2 shadow-lg md:shadow overflow-auto bg-white transform transition absolute z-10 md:static',
          openToc ? 'left-0 top-0 translate-x-0' : '-translate-x-full md:translate-x-0',
        )}>
          <TOC topic={topic} articleSet={articleSet} article={article} articleLocale={localArticleSets}/>
        </div>
        <div className={'md:hidden absolute right-2 top-2 z-40 bg-white rounded-full p-1 ring-1 flex'}
             onClick={() => setOpenToc(o => !o)}
        >
          <FontAwesomeIcon icon={faBars}
                           className={'!w-4 !h-4 text-blue-300'}/>
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