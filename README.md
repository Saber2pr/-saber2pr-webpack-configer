# @saber2pr/webpack-configer

> T^T how to config webpack use declaration?

```bash
# from npm
npm install @saber2pr/webpack-configer

# from github
git clone https://github.com/Saber2pr/webpack-configer.git
```

# webpack.config.js

> typescript(tsx) + less

> [js | css] Hash + Minify

> auto compile

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanCSSPlugin = require('less-plugin-clean-css')

const extractLess = new ExtractTextPlugin('style-[hash].css')

import WebpackConfig from '@saber2pr/webpack-configer'

// use declaration from @types/webpack
module.exports = WebpackConfig({
  mode: 'production',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.js', '.ts']
  },
  output: {
    filename: 'bundle-[hash].js',
    path: `${process.cwd()}/build/bundle-[hash].js`
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
        use: extractLess.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader',
              options: {
                plugins: [
                  new CleanCSSPlugin({
                    advanced: true
                  })
                ]
              }
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin(), extractLess]
})
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "esModuleInterop": true,
    "jsx": "react",
    "lib": ["dom", "es2015"]
  },
  "exclude": ["node_modules", "lib"]
}
```

---

## start

```bash
npm install
```

```bash
npm start

npm test
```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
