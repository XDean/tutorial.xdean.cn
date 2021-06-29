import A0, {meta as m0} from './0-overview.mdx'
import A1, {meta as m1} from './1-hello-world.mdx'
import A2, {meta as m2} from './2-SparkSession.mdx'

import {ArticleData, ArticleSet} from "../article";

const Overview = {Component: A0, meta: m0}
const HelloWorld = {Component: A1, meta: m1}
const SparkSession = {Component: A2, meta: m2}

export const BasicArticles: ArticleData[] = [
  Overview,
  HelloWorld,
  SparkSession,
]

export const BasicArticleSet: ArticleSet = {
  id: 'basic',
  name: '基础篇',
  articles: BasicArticles,
}