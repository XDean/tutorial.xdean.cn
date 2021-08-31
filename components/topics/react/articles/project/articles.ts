import A0, {meta as m0} from './0-introduce.mdx'
import A1, {meta as m1} from './1-basic.mdx'
import A2, {meta as m2} from './2-create-react-app.mdx'
import A3, {meta as m3} from './3-nextjs.mdx'
import A4, {meta as m4} from './4-ui-lib.mdx'
import A5, {meta as m5} from './5-data-manage.mdx'
import A6, {meta as m6} from './6-css.mdx'
import A7, {meta as m7} from './7-other-lib.mdx'
import A8, {meta as m8} from './8-summary.mdx'
import {ArticleData, ArticleSet} from "../../../topic";

export const ProjectArticles: ArticleData[] = [
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

export const ProjectArticleSet: ArticleSet = {
  id: 'project',
  name: '工程篇',
  articles: ProjectArticles,
}