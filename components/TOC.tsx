import Link from 'next/link'
import clsx from "clsx";
import {AllArticles, ArticleData, ArticleSet} from "./topics/react/articles/article";
import css from './TOC.module.css'

type Props = {
  articleSet: ArticleSet
  article: ArticleData
}

export const TOC = (props: Props) => {
  return (
    <div className={'flex flex-row h-full relative'}>
      <ul className={'text-xl h-full border-r block mr-1 pr-1'}>
        {AllArticles.map(e => (
          <li key={e.id}>
            <Link href={`/article/react/${e.id}/${e.articles[0].meta.id}`}>
              <div className={clsx(css.item, e.id === props.articleSet.id ? css.activeItem : css.inactiveItem)}>
                {e.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <ul className={'text-xl'}>
        {props.articleSet.articles.map(e => (
          <li key={e.meta.id}>
            <Link href={`/article/react/${props.articleSet.id}/${e.meta.id}`}>
              <div className={clsx(css.item, e.meta.id === props.article.meta.id ? css.activeItem : css.inactiveItem)}>
                {e.meta.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}