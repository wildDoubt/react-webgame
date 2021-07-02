const path = require('path')
const webpack = require('webpack')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


module.exports = {
    name: 'wordrelay-setting',

    mode: 'development', // 실서비스: production

    devtool: 'eval',// 빠르게

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    entry: {
        // app:['./client.jsx', './WordRelay.jsx'], 이미 client에서 WordRelay를 불렀기 때문에 호출할 필요없다.
        app: ['./client'],
    },// 입력

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                // preset은 수십개의 plugin들의 모임
                // preset에서 option을 따로 설정할 수 있다.
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 0.5% in KR',],
                        },
                        debug: true,
                    }],
                    ['@babel/preset-react', {}],
                ],
                plugins:[
                    'react-refresh/babel'
                ]
            },
        }],
    },

    plugins: [
        new RefreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'), // 현재 폴더의 dist폴더가 path가 된다.
        filename: 'app.js',
        publicPath: '/dist/',
    },// 출력
    // 메인 설정: entry -> module -> output
    // 추가적으로 설정할 내용은 plugins

    devServer: {
        publicPath: '/dist/',
        hot: true, // 기존 데이터를 유지하면서 새로고침
        port: 8089,
    }
}
