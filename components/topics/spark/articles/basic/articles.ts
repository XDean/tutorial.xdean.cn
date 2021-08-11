import A0, {meta as m0} from './0-overview.mdx'
import A1, {meta as m1} from './1-hello-world.mdx'
import A2, {meta as m2} from './2-rdd-dataframe.mdx'
import A3, {meta as m3} from './3-rdd-basic.mdx'
import A4, {meta as m4} from './4-rdd-closure.mdx'
import A5, {meta as m5} from './5-rdd-cache.mdx'
import A6, {meta as m6} from './6-df-basic.mdx'
import A7, {meta as m7} from './7-df-op.mdx'
import A8, {meta as m8} from './8-df-sql.mdx'

import {ArticleData, ArticleSet} from "../../../topic";

export const BasicArticles: ArticleData[] = [
  {Component: A0, meta: m0},
  {Component: A1, meta: m1},
  {Component: A2, meta: m2},
  {Component: A3, meta: m3},
  {Component: A4, meta: m4},
  {Component: A5, meta: m5},
  {Component: A6, meta: m6},
  {Component: A7, meta: m7},
  {Component: A8, meta: m8},
]

export const BasicArticleSet: ArticleSet = {
  id: 'basic',
  name: '基础篇',
  articles: BasicArticles,
}