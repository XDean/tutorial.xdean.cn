import Link from 'next/link'
import clsx from "clsx";
import css from './TOC.module.css'
import {ArticleData, ArticleLocale, ArticleSet, Topic} from "./topics/topic";

type Props = {
  topic: Topic
  articleLocale: ArticleLocale
  articleSet: ArticleSet
  article: ArticleData
}

export const TOC = (props: Props) => {
  const {
    topic,
    articleLocale: {locale, sets},
    articleSet,
    article
  } = props
  return (
    <div className={'flex flex-row h-full relative'}>
      {sets.length > 1 && (
        <ul className={'text-xl h-full border-r block mr-1 pr-1'}>
          {sets.map(e => (
            <li key={e.id}>
              <Link href={`/article/${topic.id}/${e.id}/${e.articles[0].meta.id}`} locale={locale}>
                <div className={clsx(css.item, e.id === articleSet.id ? css.activeItem : css.inactiveItem)}>
                  {e.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <ul className={'text-xl'}>
        {articleSet.articles.map(e => (
          <li key={e.meta.id}>
            <Link href={`/article/${topic.id}/${articleSet.id}/${e.meta.id}`} locale={locale}>
              <div className={clsx(css.item, e.meta.id === article.meta.id ? css.activeItem : css.inactiveItem)}>
                {e.meta.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}