const mix = require('laravel-mix');
const config = require('./webpack.config');
require('laravel-mix-vue-css-modules');
require('laravel-mix-eslint');

mix
  .js('resources/js/app.js', 'public/js')
  // .sass('resources/sass/app.scss', 'public/css')
  .webpackConfig(config)
  // https://github.com/JeffreyWay/laravel-mix/issues/2304#issuecomment-572363432
  .options({ terser: { extractComments: false } })
  // https://github.com/JeffreyWay/laravel-mix/issues/2115
  .vueCssModules({
    oneOf: true,
    preProcessor: { scss: true },
    ...(mix.inProduction()
      ? { cssLoaderOptions: { localIdentName: 'css-[hash:base64:7]' } }
      : {}),
  })
  .extract([
    'vuex',
    'axios',
    'vee-validate',
    'vue-i18n',
    'vue-meta',
    'vue-router',
  ]);

if (process.MIX_ESLINT) {
  mix.eslint();
}

mix.inProduction() ? mix.version() : mix.sourceMaps(true, 'source-map');

// mix
// .disableNotifications()
// .dump();
