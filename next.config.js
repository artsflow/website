const path = require('path')
// const withReactSvg = require('next-react-svg')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    config.module.rules.push({
      test: /\.(svg)$/,
      include: path.resolve(__dirname, 'src/svg'),
      loader: 'svg-react-loader',
    })
    return config
  },
  future: {
    webpack5: true,
  },
}

module.exports = withPlugins([
  // [withReactSvg, { include: path.resolve(__dirname, 'src/svg') }],
  nextConfig,
])
