"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {	
  entry: "./src/js/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      title: 'Home',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/views/index.html'),
    }),
    new HtmlWebpackPlugin({ 
      title: 'Register',
      filename: 'register.html',
      template: path.resolve(__dirname, 'src/views/register.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'Login',
      filename: 'login.html',
      template: path.resolve(__dirname, 'src/views/login.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'New Post',
      filename: 'new-post.html',
      template: path.resolve(__dirname, 'src/views/new-post.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'About',
      filename: 'about.html',
      template: path.resolve(__dirname, 'src/views/about.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/img/"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: "style-loader",
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
