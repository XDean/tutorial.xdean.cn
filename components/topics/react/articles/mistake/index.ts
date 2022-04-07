import dynamic from 'next/dynamic';
import { ArticleSet } from '../../../topic';

export const MistakeArticleSet: ArticleSet = {
  id: 'mistake',
  name: '错题集',
  articles: [
    {
      Component: dynamic(() => import('./index.mdx')), meta: {
        id: 'index',
        name: 'React 错题集',
      },
    },
  ],
};