<!--
 * @Author: yeah
 * @Date: 2020-06-11 15:27:02
 * @LastEditTime: 2020-06-12 13:57:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yeah\webpack\note.md
--> 
## webpack安装
```
npm init -y
yarn add webpack webpack-cli -D
npm i webpack webpack-cli --save-dev
```
npm5.2之后提供了一个命令npx，基于整个命令可以执行本地安装的模块
$ npx webpack 基于npx执行了webpack命令，整个命令式实现打包部署的
- 找到node_modules/.bin
- 要求我们的有webpack.cmd的文件
- 执行webpack.cmd

$ 也可以从package.json中配置可执行的脚本
```
script:{
    build: "webpack"
}
```
$ npm run build or yarn build

$ npx webpack --config webpack.config.development.js

## 安装webpack-dev-server
$ yarn add webpack-dev-server -D

## 安装html-webpack-plugin
$ yarn add html-webpack-plugin -D

## webpack中的加载器loader：处理样式
$ yarn add css-loader style-loader less less-loader autoprefix postcss-loader -D

