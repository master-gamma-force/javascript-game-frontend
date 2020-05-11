const path = require('path')

module.exports = {
  entry: {
    main: './src/core/index.js',
    worker: './src/core/workers/worker.js',
  },
  output: {
    path: path.resolve(__dirname, 'workers'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 9000,
  },
}
