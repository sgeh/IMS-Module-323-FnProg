// TS -> WebPack see https://webpack.js.org/guides/typescript/

const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

const rootDir = path.resolve(__dirname, ".");
const appMain = rootDir + "/src/main.ts";
const distDir = rootDir + "/scripts";

module.exports = {
    context: rootDir, // a base directory to resolve the "entry"
    entry: {
        "main": appMain
        // point (main.ts as [main]) and dependendies results in [destDir]\[bundle].js
    },
    output: {
        path: distDir,
        filename: "[name].js" // [name] means we are going to use the "key" value of each entry as the bundle file name
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /(node_modules|tmp)/
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.ts' ],
    },
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin()],
      },
    devtool: "source-map",
    mode: "development"
};
