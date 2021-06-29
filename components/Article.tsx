import {useMemo} from "react";
import {GithubComment} from "./util/GithubComment";
import Link from 'next/link'
import {VisitorTag} from "./util/VisitorTag";
import css from './Article.module.css'
import {ArticleData, ArticleSet} from "./topics/react/articles/article";

type Props = {
  articleSet: ArticleSet
  article: ArticleData
}

export const Article = (props: Props) => {
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
      <div className={'flex flex-row justify-center pb-4 pt-8'}>
        <Link href={`/article/react/${props.articleSet.id}/${prev?.meta.id}`}>
          <div className={css.navButton}>
            {prev && `上一节：${prev.meta.name}`}
          </div>
        </Link>
        <Link href={`/article/react/${props.articleSet.id}/${next?.meta.id}`}>
          <div className={css.navButton}>
            {next && `下一节：${next.meta.name}`}
          </div>
        </Link>
      </div>
      <hr/>
      <GithubComment/>
    </div>
  )
}