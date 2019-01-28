const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * Get sync an array of instances of all templates.
 * @returns {array}
 */
function getAll() {
  const pages = []
  fs.readdirSync('./src/views/pages').forEach(file => {
    const filename = `${file.slice(0, -3)}html`

    pages.push(
      new HtmlWebpackPlugin({
        filename,
        template: `src/views/pages/${file}`,
      })
    )
  })

  return pages
}

const pages = module.exports = {
  getAll,
}
