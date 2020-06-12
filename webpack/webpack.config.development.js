/*
 * @Author: yeah
 * @Date: 2020-06-11 15:53:03
 * @LastEditTime: 2020-06-12 14:46:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yeah\webpack\webpack.config.js
 */ 
let path = require("path");
// 每一个导入进来的插件都是一个类，new HtmlWebpackPlugin()
let HtmlWebpackPlugin= require("html-webpack-plugin");

module.exports = {
    mode: "development", // 开发环境development，生产环境production
    entry: "./src/index.js",
    output: {
        // 输出的文件名
        // 加hash，让每一次生成的文件名都带有一个hash值
        filename: "bundle.min.[hash].js",
        // 输出的目录必须是绝对路径
        path: path.resolve(__dirname, "build"), // 从当前文件夹创建一个build文件夹
    },
    // 关于webpack-dev-server的一些配置 执行命令： webpack-dev-server xxx.js
    devServer: {
        port: 3000,
        progress: true, // 能显示打包编译的进度
        contentBase: "./build", // 指定当前服务处理资源的目录
        open: true, // 编译完成会自动打开浏览器
    },
    // 使用插件
    plugins: [
        new HtmlWebpackPlugin({
            // 使用自己的模板
            template: "./src/index.html",
            // 输入的文件名
            filename: "index.html",
            // 给引入的文件设置HASH（清楚缓存的），也可以在output中设置filename: bundle.[hash].js来生成不同的文件
            hash: true,
            // 控制是否以及以何种方式最小化输出
            // https:// github.co/kangax/html-minifier
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true,
                removeEmptyAttributes: true
            }
        })
    ],
    // 使用加载器loader处理规则
    module: {
        rules: [
            {
                test: /\.(css|less)$/i, // i忽略大小写
                // 控制使用的loader（有顺序的：从右到左执行）
                use: [
                    "style-loader", // 把css插入到HEAD中（内嵌式样式）
                    "css-loader", // 编译解析@import/URL()这种语法
                    "postcss-loader", // 自动给css设置前缀 autoprefixer
                    {
                        loader: "less-loader", // 编译less
                        options: { // 加载额外的配置
                            
                        }
                    }
                ], // 控制使用的loader
            }
        ]
    }
}