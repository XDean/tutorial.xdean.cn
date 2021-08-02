import {ComponentType} from "react";

export type Topic = {
  id: string
  name: string
  title?: string // default is 'XDean的{name}教程'
  Icon: ComponentType
  draft?: boolean
  articles: ArticleLocale[]
}

export type ArticleLocale = {
  locale?: string
  sets: ArticleSet[]
}

export type ArticleSet = {
  id: string
  name: string
  articles: ArticleData[]
}

export type ArticleData = {
  Component: ComponentType
  meta: {
    id: string
    name: string
    title?: string
  }
}

export function getLocaleArticleSets(t: Topic, locale?: string) {
  for (const e of t.articles) {
    if (e.locale === locale) {
      return e
    }
  }
  return t.articles[0]
}