const path = require("path");

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
            }
        ]
    }
}