const withMDX = require('@next/mdx');
const remarkPrism = require('remark-prism');
const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

module.exports = withMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      remarkMath,
      [remarkPrism, {
        plugins: [
          'line-numbers',
          'treeview',
        ]
      }]
    ],
    rehypePlugins: [
      rehypeKatex,
    ],
  },
})({
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
})