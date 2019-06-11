import { WebpackConfig, templateContent } from '..'

export const config = WebpackConfig({
  mode: 'production',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.js', '.ts']
  },
  output: {
    filename: 'bundle-[hash].js',
    path: `/build/bundle-[hash].js`
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader']
      },
      {
        test: /\.less$/,
        use: []
      }
    ]
  }
})

console.log(templateContent())
