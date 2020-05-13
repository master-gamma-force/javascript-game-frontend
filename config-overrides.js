module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.worker\.[bundle.]?js$/,
    use: { loader: 'worker-loader' },
  })
  return config
}
