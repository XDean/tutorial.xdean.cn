import dynamic from 'next/dynamic';

import { ArticleData, ArticleSet } from '../../../topic';

export const OverviewArticles: ArticleData[] = [
  {
    Component: dynamic(() => import('./0-overview.mdx')), meta: {
      id: 'overview',
      name: '教程概览',
    },
  },
  {
    Component: dynamic(() => import('./1-background.mdx')), meta: {
      id: 'background',
      name: '大数据背景',
    },
  },
  {
    Component: dynamic(() => import('./2-tech.mdx')), meta: {
      id: 'progress',
      name: '大数据技术',
    },
  },
  {
    Component: dynamic(() => import('./3-mapreduce.mdx')), meta: {
      id: 'mapreduce',
      name: 'MapReduce',
    },
  },
  {
    Component: dynamic(() => import('./4-spark.mdx')), meta: {
      id: 'spark',
      name: 'Spark',
    },
  },
];

export const OverviewArticleSet: ArticleSet = {
  id: 'overview',
  name: '概述篇',
  articles: OverviewArticles,
};