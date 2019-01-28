const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
  module: {
    rules: [
      { test: /\.ejs$/, loader: 'ejs-compiled-loader?htmlmin' },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')({
                'browsers': ['last 2 versions', 'ie > 11'],
              })],
            },
          },
          { loader: 'sass-loader' },
        ],
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
})
