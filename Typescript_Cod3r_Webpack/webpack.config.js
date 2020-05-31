const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production',      // esse modo arquivos são minificados, a outra foram é 'development
    entry: './src/main.ts',  // arquivo de entrada
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        hot: true    // atualize sempre que mudar
    },
    output: {
        filename: 'app.min.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new CopyPlugin([
            { from: 'public' }
        ])
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}