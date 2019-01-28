module.exports = () => ({
  module: {
    rules: [
      { test: /\.ejs$/, loader: 'ejs-compiled-loader?compileDebug' },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
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
})
