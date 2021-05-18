var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true,
    },
    devtool: "source-map",
    plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};
//# sourceMappingURL=webpack.dev.config.js.map