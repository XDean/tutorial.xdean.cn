import A0, {meta as m0} from './0-introduce.mdx'
import A1, {meta as m1} from './1-basic.mdx'
import A2, {meta as m2} from './2-create-react-app.mdx'
import {ArticleData, ArticleSet} from "../../../topic";


export const ProjectArticles: ArticleData[] = [
  {Component: A0, meta: m0},
  {Component: A1, meta: m1},
  {Component: A2, meta: m2},
]

export const ProjectArticleSet: ArticleSet = {
  id: 'project',
  name: '工程篇',
  articles: ProjectArticles,
}