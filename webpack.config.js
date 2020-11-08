const path = require('path');
const ChunkRenamePlugin = require('webpack-chunk-rename-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const report = process.argv.slice(2).includes('--report');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.join(__dirname, './resources/js'),
      '@components': path.join(__dirname, './resources/js/components'),
      '@plugins': path.join(__dirname, './resources/js/plugins'),
      '@router': path.join(__dirname, './resources/js/router'),
      '@store': path.join(__dirname, './resources/js/store'),
      '@utils': path.join(__dirname, './resources/js/utils'),
      '@views': path.join(__dirname, './resources/js/views'),
      '@layouts': path.join(__dirname, './resources/js/views/layouts'),
    },
  },
  plugins: [
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
    chunkFilename: 'js/[name].[chunkhash:8].js',
  },
};
