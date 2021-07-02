import A0, {meta as m0} from './0-overview.mdx'
import A1, {meta as m1} from './1-background.mdx'
import A2, {meta as m2} from './2-tech.mdx'
import A3, {meta as m3} from './3-mapreduce.mdx'
import A4, {meta as m4} from './4-spark.mdx'

import {ArticleData, ArticleSet} from "../../../topic";

const Overview = {Component: A0, meta: m0}
const Background = {Component: A1, meta: m1}
const Tech = {Component: A2, meta: m2}
const MapReduce = {Component: A3, meta: m3}
const Spark = {Component: A4, meta: m4}

export const OverviewArticles: ArticleData[] = [
  Overview,
  Background,
  Tech,
  MapReduce,
  Spark,
]

export const OverviewArticleSet: ArticleSet = {
  id: 'overview',
  name: '概述篇',
  articles: OverviewArticles,
}