import {TopBarProps} from "../layout/TopBar";
import {ComponentType} from "react";

export type Topic = {
  name: string
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