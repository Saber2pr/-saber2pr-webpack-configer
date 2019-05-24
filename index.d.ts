/*
 * @Author: saber2pr
 * @Date: 2019-05-22 22:09:15
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-22 22:26:58
 */
declare module '@saber2pr/webpack-configer' {
  import * as webpack from 'webpack'
  function WebpackConfig(config: webpack.Configuration): webpack.Configuration
  const templateContent: string
}