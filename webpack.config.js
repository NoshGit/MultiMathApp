module.exports = {
  entry: './app/app.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.css' ]
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: true
  }
};
