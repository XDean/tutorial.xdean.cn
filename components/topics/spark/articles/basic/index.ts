import dynamic from 'next/dynamic';

import { ArticleData, ArticleSet } from '../../../topic';

export const BasicArticles: ArticleData[] = [
  {
    Component: dynamic(() => import('./0-overview.mdx')), meta: {
      id: 'overview',
      name: '准备',
    },
  },
  {
    Component: dynamic(() => import('./1-hello-world.mdx')), meta: {
      id: 'hello-world',
      name: 'Hello World',
    },
  },
  {
    Component: dynamic(() => import('./2-rdd-dataframe.mdx')), meta: {
      id: 'rdd-dataframe',
      name: 'RDD & DataFrame',
    },
  },
  {
    Component: dynamic(() => import('./3-rdd-basic.mdx')), meta: {
      id: 'rdd-basic',
      name: 'RDD基础',
    },
  },
  {
    Component: dynamic(() => import('./4-rdd-closure.mdx')), meta: {
      id: 'rdd-closure',
      name: 'RDD闭包',
    },
  },
  {
    Component: dynamic(() => import('./5-rdd-cache.mdx')), meta: {
      id: 'rdd-cache',
      name: 'RDD持久化',
    },
  },
  {
    Component: dynamic(() => import('./6-df-basic.mdx')), meta: {
      id: 'df-basic',
      name: 'DataFrame基础',
    },
  },
  {
    Component: dynamic(() => import('./7-df-op.mdx')), meta: {
      id: 'df-op',
      name: 'DataFrame操作',
    },
  },
  {
    Component: dynamic(() => import('./8-df-sql.mdx')), meta: {
      id: 'df-sql',
      name: 'DataFrame SQL',
    },
  },
  {
    Component: dynamic(() => import('./9-ml.mdx')), meta: {
      id: 'ml',
      name: 'ML机器学习',
    },
  },
];

export const BasicArticleSet: ArticleSet = {
  id: 'basic',
  name: '基础篇',
  articles: BasicArticles,
};