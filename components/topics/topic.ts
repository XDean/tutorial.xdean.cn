import {ComponentType} from "react";
import {Locale} from "../util/locale";

export type Topic = {
  id: string
  name: string
  title?: string
  Icon: ComponentType
  draft?: boolean
  articles: ArticleLocale[]
}

export type ArticleLocale = {
  locale?: Locale
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