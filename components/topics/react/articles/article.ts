import {BasicArticleSet} from "./basic/articles";
import {ProjectArticleSet} from "./project/articles";
import {AdvancedArticleSet} from "./advanced/articles";

export type ArticleData = {
  Component: React.ComponentType
  meta: {
    id: string
    name: string
    title?: string
  }
}

export type ArticleSet = {
  id: string
  name: string
  articles: ArticleData[]
}

export const AllArticles = [
  BasicArticleSet,
  ProjectArticleSet,
  AdvancedArticleSet,
]