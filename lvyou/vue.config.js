const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
      ]
    }
  },
    configureWebpack: {
        resolve: {
            alias: {
                'css': resolve('src/assets/css')
            }
        }
    }
}
