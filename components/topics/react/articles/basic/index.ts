import dynamic from 'next/dynamic';
import { ArticleData, ArticleSet } from '../../../topic';


export const BasicArticles: ArticleData[] = [
  {
    Component: dynamic(() => import('./0-introduce.mdx')), meta: {
      id: 'introduce',
      name: '教程介绍',
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
      name: '渲染 Render',
    },
  },
  {
    Component: dynamic(() => import('./4-component.mdx')), meta: {
      id: 'component',
      name: '组件 Component',
    },
  },
  {
    Component: dynamic(() => import('./5-state.mdx')), meta: {
      id: 'state',
      name: '状态 useState',
    },
  },
  {
    Component: dynamic(() => import('./6-condition.mdx')), meta: {
      id: 'condition',
      name: '条件渲染',
    },
  },
  {
    Component: dynamic(() => import('./7-list.mdx')), meta: {
      id: 'list',
      name: '列表渲染',
    },
  },
  {
    Component: dynamic(() => import('./8-controlled.mdx')), meta: {
      id: 'controlled',
      name: '受控组件',
    },
  },
  {
    Component: dynamic(() => import('./9-effect.mdx')), meta: {
      id: 'effect',
      name: '副作用 useEffect',
    },
  },
  {
    Component: dynamic(() => import('./10-hook.mdx')), meta: {
      id: 'hook',
      name: '钩子 Hook',
    },
  },
  {
    Component: dynamic(() => import('./11-context.mdx')), meta: {
      id: 'context',
      name: '上下文 useContext',
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
      name: '引用 useRef',
    },
  },
  {
    Component: dynamic(() => import('./14-tic-tac-toe.mdx')), meta: {
      id: 'tic-tac-toe',
      name: '实践 - 井字棋',
    },
  },
  {
    Component: dynamic(() => import('./15-summary.mdx')), meta: {
      id: 'summary',
      name: '小结',
    },
  },
];

export const BasicArticleSet: ArticleSet = {
  id: 'basic',
  name: '基础篇',
  articles: BasicArticles,
};