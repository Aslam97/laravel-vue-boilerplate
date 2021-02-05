const mix = require('laravel-mix');
const config = require('./webpack.config');
require('laravel-mix-vue-css-modules');
require('laravel-mix-eslint');

mix
  .js('resources/js/app.js', 'public/js')
  .webpackConfig(config)
  .options({ terser: { extractComments: false } })
  .vueCssModules({
    oneOf: true,
    preProcessor: { scss: true },
    ...(mix.inProduction()
      ? { cssLoaderOptions: { localIdentName: 'css-[hash:base64:7]' } }
      : {}),
  })
  .eslint({ fix: true })
  .extract([
    'vue',
    'vuex',
    'axios',
    'vee-validate',
    'vue-i18n',
    'vue-meta',
    'vue-router',
    'vue-lazyload',
  ]);

mix.inProduction() ? mix.version() : mix.sourceMaps(true, 'source-map');

// mix
// .disableNotifications()
// .dump();
