const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    publicPath: '/',    
    contentBase: baseWebpackConfig.externals.paths.build,
    port: 3000,
    overlay: {
        warnings: false,
        errors: true
    }
  },
  plugins: [
      new webpack.SourceMapDevToolPlugin({
          filename: '[file].map'
      })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
} )