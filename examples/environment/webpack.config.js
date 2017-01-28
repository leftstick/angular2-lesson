const {resolve} = require('path');

module.exports = {
    entry: {
        index: './ts/index.ts'
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        exprContextCritical: false,
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader']
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.ts'
        ]
    }
};
