const path = require("path")
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMiniMixerPlugin = require("css-minimizer-webpack-plugin")
module.exports ={
    entry:"./src/js/index.js",                      // 시작점
    output :{                                       // bundle 설정
        filename:"bundle.js",
        path: path.resolve(__dirname,"./dist"),     // 상대경로를 못찾으므로 PATH 모듈로 절대경로로 설정함
        clean:true
    },
    devtool:"source-map",
    mode:"development",
    devServer:{
        host:"localhost",
        port:"8080",
        open:true,
        watchFiles:'index.html'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "keyboard",
            template:"./index.html",     // loadah 를 index.html 에서 사용가능
            inject:"body",
            favicon:"./favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    optimization:{
        minimizer:[
            new TerserPlugin(),
            new CssMiniMixerPlugin()
        ]
    }
}

