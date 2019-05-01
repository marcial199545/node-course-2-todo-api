const path = require("path");
module.exports = {
    entry: "./playground/index.ts",
    mode: "production", //can either be development or production
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./playground-dist")
    }
};
