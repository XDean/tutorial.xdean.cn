import dynamic from 'next/dynamic';
import { ArticleData, ArticleSet } from '../../../topic';

export const AdvancedArticles: ArticleData[] = [
  {
    Component: dynamic(() => import('./0-introduce.mdx')), meta: {
      id: 'pending',
      name: 'Pending',
    },
  },
];

export const AdvancedArticleSet: ArticleSet = {
  id: 'advanced',
  name: '高级篇',
  articles: AdvancedArticles,
};