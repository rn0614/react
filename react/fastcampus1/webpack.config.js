const path = require("path");
const TerserWepackPlugin = require('terser-webpack-plugin');
module.exports ={
    entry: "./src/js/index.js",                     // 자바스크립트의 진입점
    output:{                                        // BUILD시 BUNDLE 속성
        filename:"bundle.js",                       // 번들 파일이름
        path: path.resolve(__dirname, "./dist"),    // 생성경로 PATH, DIRNAME 으로 절대경로 지정
        clean:true                                  // 생성경로에 이미 파일이 있다면 지우고 다시 생성
    },
    devtool: "source-map",
    mode :"development",
    optimization:{
        minimizer:{
            //new TerserWepackPlugin()
        }
    }
}