import A0, {meta as m0} from './0-overview.mdx'
import A1, {meta as m1} from './1-hello-world.mdx'
import A2, {meta as m2} from './2-rdd-dataframe.mdx'
import A3, {meta as m3} from './3-rdd.mdx'

import {ArticleData, ArticleSet} from "../../../topic";

export const BasicArticles: ArticleData[] = [
  {Component: A0, meta: m0},
  {Component: A1, meta: m1},
  {Component: A2, meta: m2},
  {Component: A3, meta: m3},
]

export const BasicArticleSet: ArticleSet = {
  id: 'basic',
  name: '基础篇',
  articles: BasicArticles,
}