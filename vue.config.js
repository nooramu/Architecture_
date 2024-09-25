const { defineConfig } = require('@vue/cli-service')
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  // 设置插件配置
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      // new HtmlWebpackPlugin({
      //   template:'./public/index.html', //注意 index 的路径
      // })
    ]
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'

})
