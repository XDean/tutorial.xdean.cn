import A0, {meta as m0} from './0-overview.mdx'
import A1, {meta as m1} from './1-background.mdx'
import A2, {meta as m2} from './2-tech.mdx'

import {ArticleData, ArticleSet} from "../../../topic";

const Overview = {Component: A0, meta: m0}
const Background = {Component: A1, meta: m1}
const Tech = {Component: A2, meta: m2}

export const OverviewArticles: ArticleData[] = [
  Overview,
  Background,
  Tech,
]

export const OverviewArticleSet: ArticleSet = {
  id: 'overview',
  name: '概述篇',
  articles: OverviewArticles,
}