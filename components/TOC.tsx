import Link from 'next/link'
import clsx from "clsx";
import css from './TOC.module.css'
import {ArticleData, ArticleSet, Topic} from "./topics/topic";

type Props = {
  topic: Topic
  articleSet: ArticleSet
  article: ArticleData
}

export const TOC = (props: Props) => {
  return (
    <div className={'flex flex-row h-full relative'}>
      {props.topic.articles.length > 1 && (
        <ul className={'text-xl h-full border-r block mr-1 pr-1'}>
          {props.topic.articles.map(e => (
            <li key={e.id}>
              <Link href={`/article/${props.topic.id}/${e.id}/${e.articles[0].meta.id}`}>
                <div className={clsx(css.item, e.id === props.articleSet.id ? css.activeItem : css.inactiveItem)}>
                  {e.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <ul className={'text-xl'}>
        {props.articleSet.articles.map(e => (
          <li key={e.meta.id}>
            <Link href={`/article/${props.topic.id}/${props.articleSet.id}/${e.meta.id}`}>
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