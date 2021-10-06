const path = require('path')
// const withReactSvg = require('next-react-svg')
const withPlugins = require('next-compose-plugins')
const { withSentryConfig } = require('@sentry/nextjs')

const SentryWebpackPluginOptions = {
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_SENTRY_ENV,
}

const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
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
}

module.exports = withPlugins([
  // [withReactSvg, { include: path.resolve(__dirname, 'src/svg') }],
  nextConfig,
  [withSentryConfig, SentryWebpackPluginOptions],
])
