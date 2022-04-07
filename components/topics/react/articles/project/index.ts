import dynamic from 'next/dynamic';
import { ArticleData, ArticleSet } from '../../../topic';

export const ProjectArticles: ArticleData[] = [
  {
    Component: dynamic(() => import('./0-introduce.mdx')), meta: {
      id: 'overview',
      name: '概述',
    },
  },
  {
    Component: dynamic(() => import('./1-basic.mdx')), meta: {
      id: 'basic',
      name: '基础知识',
    },
  },
  {
    Component: dynamic(() => import('./2-create-react-app.mdx')), meta: {
      id: 'create-react-app',
      name: 'Create React App',
    },
  },
  {
    Component: dynamic(() => import('./3-nextjs.mdx')), meta: {
      id: 'next.js',
      name: 'Next.JS',
    },
  },
  {
    Component: dynamic(() => import('./4-ui-lib.mdx')), meta: {
      id: 'ui-lib',
      name: '组件库',
    },
  },
  {
    Component: dynamic(() => import('./5-css.mdx')), meta: {
      id: 'css',
      name: 'CSS方案',
    },
  },
  {
    Component: dynamic(() => import('./6-state-manage.mdx')), meta: {
      id: 'state-manage',
      name: '状态管理',
    },
  },
  {
    Component: dynamic(() => import('./7-other-lib.mdx')), meta: {
      id: 'other-lib',
      name: '其它实用库',
    },
  },
];

export const ProjectArticleSet: ArticleSet = {
  id: 'project',
  name: '工程篇',
  articles: ProjectArticles,
};