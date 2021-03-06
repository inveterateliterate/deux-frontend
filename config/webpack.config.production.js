const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const stringifyValues = require('./helpers/stringifyValues')
const Figaro = require('figaro-js')
const paths = require('./paths')
const aliases = require('./aliases')
const bourbonIncludePaths = require('bourbon').includePaths
const neatIncludePaths = require('bourbon-neat').includePaths

process.env.NODE_ENV = process.env.NODE_ENV || 'production'
if (!['production', 'test'].includes(process.env.NODE_ENV)) throw new Error('Builds must have be in production or test environment.')
Figaro.load()

module.exports = {
  bail: true,
  devtool: 'source-map',
  entry: [
    // Include polyfills
    'babel-polyfill',
    paths.jsFolder,
  ],
  output: {
    path: paths.outputFolder,
    filename: 'static/js/[name].[chunkhash:8].js',
    publicPath: '/',
  },
  resolve: {
    alias: aliases(paths.sourceFolder),
    // Resolve .index files correctly
    mainFiles: ['index', '.index'],
  },
  module: {
    rules: [
      // This embeds assets smaller than the specified size as data URLs to avoid requests.
      {
        exclude: [
          /\.html$/,
          /\.js$/,
          /\.scss$/,
          /\.json$/,
          /\.svg$/
        ],
        include: paths.sourceFolder,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ],
      },
      // Process JS with Babel, and a block loader for the styleguide <xmp> tags.
      {
        test: /\.js$/,
        include: paths.sourceFolder,
        use: [
          'babel-loader',
          'xmp-escape-loader',
          'eslint-loader',
        ],
      },
      // `ExtractTextPlugin` first applies our loaders, then grabs the result CSS and puts it in a separate file.
      // This way we actually ship a single CSS file in production instead of JS code injecting <style> tags.
      {
        test: /\.scss$/,
        include: paths.sourceFolder,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => autoprefixer()
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  bourbonIncludePaths,
                  neatIncludePaths,
                  './node_modules/bulma'
                ]
              }
            },
          ]
        })
      },
      // Use file loader for svgs
      {
        test: /\.svg$/,
        include: paths.sourceFolder,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].svg'
            },
          }
        ],
      }
      // ** STOP ** Are you adding a new loader?
      // Remember to add the new extension(s) to the "url" loader exclusion list :)
    ]
  },
  plugins: [
    // Adds env variables to index.html
    new InterpolateHtmlPlugin(process.env),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.htmlTemplate,
      chunksSortMode: 'dependency',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
    }),
    // Copy all files in /public to /build
    new CopyWebpackPlugin([{ from: paths.publicFolder, to: paths.outputFolder }]),
    // Injects env variables into JS code
    new webpack.DefinePlugin({
      'process.env': stringifyValues(process.env),
    }),
    // Remove extraneous moment locales
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    // Put CSS into a single file
    // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    new ExtractTextPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      allChunks: true,
    }),
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    // Separate vendor JS into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    // CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    // We do this so runtime code doesn't get bundled into the vendor file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'webpack-manifest',
      minChunks: Infinity,
    }),
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
