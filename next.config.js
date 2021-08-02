const withMDX = require('@next/mdx');
const rehypePrism = require('@mapbox/rehype-prism');
const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

module.exports = withMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [rehypePrism, {
        ignoreMissing: true
      }]
    ],
  },
})({
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
})