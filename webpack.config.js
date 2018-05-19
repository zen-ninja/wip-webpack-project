const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        // CSS
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        // Images
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        // Fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        // Data
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        // Data
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};