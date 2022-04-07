import dynamic from 'next/dynamic';
import { ArticleData, ArticleSet } from '../../../topic';

export const BasicArticles: ArticleData[] = [
  {
    Component: dynamic(() => import('./0-introduce.mdx')), meta: {
      id: 'introduce',
      name: 'Introduce',
    },
  },
  {
    Component: dynamic(() => import('./1-hello-world.mdx')), meta: {
      id: 'hello-world',
      name: 'Hello World',
    },
  },
  {
    Component: dynamic(() => import('./2-jsx.mdx')), meta: {
      id: 'jsx',
      name: 'JSX',
    },
  },
  {
    Component: dynamic(() => import('./3-render.mdx')), meta: {
      id: 'render',
      name: 'Render',
    },
  },
  {
    Component: dynamic(() => import('./4-component.mdx')), meta: {
      id: 'component',
      name: 'Component',
    },
  },
  {
    Component: dynamic(() => import('./5-state.mdx')), meta: {
      id: 'state',
      name: 'useState',
    },
  },
  {
    Component: dynamic(() => import('./6-condition.mdx')), meta: {
      id: 'condition',
      name: 'Conditional Render',
    },
  },
  {
    Component: dynamic(() => import('./7-list.mdx')), meta: {
      id: 'list',
      name: 'List Render',
    },
  },
  {
    Component: dynamic(() => import('./8-controlled.mdx')), meta: {
      id: 'controlled',
      name: 'Controlled Component',
    },
  },
  {
    Component: dynamic(() => import('./9-effect.mdx')), meta: {
      id: 'effect',
      name: 'useEffect',
    },
  },
  {
    Component: dynamic(() => import('./10-hook.mdx')), meta: {
      id: 'hook',
      name: 'Hook',
    },
  },
  {
    Component: dynamic(() => import('./11-context.mdx')), meta: {
      id: 'context',
      name: 'useContext',
    },
  },
  {
    Component: dynamic(() => import('./12-memo.mdx')), meta: {
      id: 'memo',
      name: 'useMemo & memo',
    },
  },
  {
    Component: dynamic(() => import('./13-ref.mdx')), meta: {
      id: 'ref',
      name: 'useRef',
    },
  },
  {
    Component: dynamic(() => import('./14-tic-tac-toe.mdx')), meta: {
      id: 'tic-tac-toe',
      name: 'Practice - Tic Tac Toe',
    },
  },
  {
    Component: dynamic(() => import('./15-summary.mdx')), meta: {
      id: 'summary',
      name: 'Summary',
    },
  },
];

export const BasicArticleSetEN: ArticleSet = {
  id: 'basic',
  name: 'Basic',
  articles: BasicArticles,
};