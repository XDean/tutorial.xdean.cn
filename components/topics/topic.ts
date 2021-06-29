import {TopBarProps} from "../layout/TopBar";
import {ComponentType} from "react";

export type Topic = {
  id: string
  name: string
  title?: string // default is 'XDean的{name}教程'
  Icon: ComponentType
  draft?: boolean
  topbar?: TopBarProps
  articles: ArticleSet[]
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