const path = require('path');
const zlib = require('zlib');
const ChunkRenamePlugin = require('webpack-chunk-rename-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const report = process.argv.slice(2).includes('--report');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.join(__dirname, './resources/js'),
      '@assets': path.join(__dirname, './resources/js/assets'),
      '@components': path.join(__dirname, './resources/js/components'),
      '@plugins': path.join(__dirname, './resources/js/plugins'),
      '@router': path.join(__dirname, './resources/js/router'),
      '@store': path.join(__dirname, './resources/js/store'),
      '@design': path.join(__dirname, './resources/js/design'),
      '@lang': path.join(__dirname, './resources/js/lang'),
      '@middleware': path.join(__dirname, './resources/js/middleware'),
      '@utils': path.join(__dirname, './resources/js/utils'),
      '@views': path.join(__dirname, './resources/js/views'),
      '@layouts': path.join(__dirname, './resources/js/views/layouts'),
    },
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
    // https://github.com/JeffreyWay/laravel-mix/issues/1889#issuecomment-503056546
    new ChunkRenamePlugin({
      initialChunksWithEntry: true,
      '/js/app': 'js/app.js',
      '/js/vendor': 'js/vendor.js',
    }),
    // https://github.com/JeffreyWay/laravel-mix/issues/968#issuecomment-367013373
    ...(report ? [new BundleAnalyzerPlugin({ openAnalyzer: true })] : []),
  ],
  output: {
    filename: '[name].js',
    chunkFilename:
      process.env.NODE_ENV === 'production'
        ? 'js/chunks/[contenthash:8].chunk.js'
        : 'js/chunks/[name].chunk.js',
  },
};
