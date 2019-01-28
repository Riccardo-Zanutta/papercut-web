const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const path = require('path')

const loadPresets = require('./build/loadPresets')
const modeConfig = env => require(`./build/webpack.${env.mode}.js`)(env)
const pages = require('./build/buildPages')
const plugins = [new webpack.ProgressPlugin()].concat(pages.getAll())

/**
 * Merge main webpack configuration with the specific environment one.
 * @param {string} env.mode - environment mode
 * @param {presets} env.presets - array of webpack presets
 * @returns {Object}
 */
module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      entry: './src/js/main.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.(png|gif|jpe?g)/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: './img/[name].[ext]',
                  limit: 5000,
                },
              },
              {
                loader: 'img-loader',
              }
            ]
          }
        ]
      },
      mode,
      plugins,
    },
    modeConfig({ mode, presets }),
    loadPresets({ mode, presets }),
  )
}
