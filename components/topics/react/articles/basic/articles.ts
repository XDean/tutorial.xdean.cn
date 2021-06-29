import A0, {meta as m0} from './0-introduce.mdx'
import A1, {meta as m1} from './1-hello-world.mdx'
import A2, {meta as m2} from './2-jsx.mdx'
import A3, {meta as m3} from './3-render.mdx'
import A4, {meta as m4} from './4-component.mdx'
import A5, {meta as m5} from './5-state.mdx'
import A6, {meta as m6} from './6-condition.mdx'
import A7, {meta as m7} from './7-list.mdx'
import A8, {meta as m8} from './8-controlled.mdx'
import A9, {meta as m9} from './effect.mdx'
import A10, {meta as m10} from './hook.mdx'
import A11, {meta as m11} from './context.mdx'
import A12, {meta as m12} from './memo.mdx'
import A13, {meta as m13} from './ref.mdx'
import A14, {meta as m14} from './tic-tac-toe.mdx'
import A15, {meta as m15} from './summary.mdx'
import {ArticleData, ArticleSet} from "../../../topic";

const Introduce = {Component: A0, meta: m0}
const HelloWorld = {Component: A1, meta: m1}
const JSX = {Component: A2, meta: m2}
const Render = {Component: A3, meta: m3}
const Component = {Component: A4, meta: m4}
const State = {Component: A5, meta: m5}
const Condition = {Component: A6, meta: m6}
const List = {Component: A7, meta: m7}
const Controlled = {Component: A8, meta: m8}
const Effect = {Component: A9, meta: m9}
const Hook = {Component: A10, meta: m10}
const Context = {Component: A11, meta: m11}
const Memo = {Component: A12, meta: m12}
const Ref = {Component: A13, meta: m13}
const TicTacToe = {Component: A14, meta: m14}
const Summary = {Component: A15, meta: m15}

export const BasicArticles: ArticleData[] = [
  Introduce,
  HelloWorld,
  JSX,
  Render,
  Condition,
  List,
  Component,
  State,
  Controlled,
  Effect,
  Hook,
  Context,
  Memo,
  Ref,
  TicTacToe,
  Summary,
]

export const BasicArticleSet: ArticleSet = {
  id: 'basic',
  name: '基础篇',
  articles: BasicArticles,
}