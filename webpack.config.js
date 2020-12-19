const path = require('path');
const ChunkRenamePlugin = require('webpack-chunk-rename-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ESLintPlugin = require('eslint-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const report = process.argv.includes('--report');

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
    new ESLintPlugin({ extensions: ['js', 'vue'], fix: true }),
    ...(report ? [new BundleAnalyzerPlugin({ openAnalyzer: true })] : []),
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new ChunkRenamePlugin({
      initialChunksWithEntry: true,
      '/js/app': 'js/app.js',
      '/js/vendor': 'js/vendor.js',
    }),
  ],
  output: {
    chunkFilename: production
      ? 'js/chunks/[contenthash:8].chunk.js'
      : 'js/chunks/[name].chunk.js',
  },
};
