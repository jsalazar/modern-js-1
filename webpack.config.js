// webpack.config.js
// airbnb
// OLD presets: ['@babel/preset-env']
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['airbnb']
          }
        }
      }
    ]
  }
};
