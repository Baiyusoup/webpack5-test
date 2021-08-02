const proConfig = require('./build/webpack.pro')
const devConfig = require('./build/webpack.dev')

module.exports = mode => mode === 'production' ? proConfig : devConfig