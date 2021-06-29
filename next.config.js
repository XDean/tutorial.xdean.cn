const withMDX = require('@next/mdx');
const rehypePrism = require('@mapbox/rehype-prism');

module.exports = withMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [rehypePrism, {
        ignoreMissing: true
      }]
    ],
  },
})