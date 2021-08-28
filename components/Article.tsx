import {useMemo} from "react";
import {GithubComment} from "./util/GithubComment";
import Link from 'next/link'
import {VisitorTag} from "./util/VisitorTag";
import css from './Article.module.css'
import {ArticleData, ArticleSet, Topic} from "./topics/topic";
import {useLocaleString} from "./util/locale";

type Props = {
  topic: Topic
  articleSet: ArticleSet
  article: ArticleData
}

export const Article = (props: Props) => {
  const localeString = useLocaleString()
  const {prev, next} = useMemo(() => {
    const idx = props.articleSet.articles.indexOf(props.article)
    return {
      prev: idx === 0 ? undefined : props.articleSet.articles[idx - 1],
      next: idx === props.articleSet.articles.length - 1 ? undefined : props.articleSet.articles[idx + 1],
    }
  }, [props.article])
  return (
    <div className={'w-full h-full relative p-2'}>
      <article className="markdown-body">
        <h1 className={'flex flex-row items-end'}>
          <div className={'mr-2'}>
            {props.article.meta.title || props.article.meta.name}
          </div>
          <VisitorTag id={`${props.articleSet.id}.${props.article.meta.id}`}/>
        </h1>
        <props.article.Component/>
      </article>
      <div className={'flex flex-col md:flex-row justify-center pb-4 pt-8'}>
        {prev && <Link href={`/article/${props.topic.id}/${props.articleSet.id}/${prev?.meta.id}`}>
          <div className={css.navButton}>
            {localeString.get('previousChapter')}：{prev.meta.name}
          </div>
        </Link>}
        {next && <Link href={`/article/${props.topic.id}/${props.articleSet.id}/${next?.meta.id}`}>
          <div className={css.navButton}>
            {localeString.get('nextChapter')}：{next.meta.name}
          </div>
        </Link>}
      </div>
      <hr/>
      <GithubComment/>
    </div>
  )
}