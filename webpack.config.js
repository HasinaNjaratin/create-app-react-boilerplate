const path = require("path");

let config = {
  entry: "./src/main.jsx",
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "main.js",
    publicPath: "/assets/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

module.exports = config;
