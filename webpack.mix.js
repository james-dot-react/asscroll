const mix = require('laravel-mix');

mix

.webpackConfig({
    output: {
      library: "ASScroll",
      libraryTarget: 'umd',
      umdNamedDefine: true
    }
})

// Set up the JS entry point
.js('src/index.js', 'dist/asscroll.js')
// .js('demo/index.js', 'demo/build.js')
// .sass('demo/index.scss', 'demo/build.css')

if (!mix.inProduction()) {
    // Include separate source maps in development builds.
    mix.webpackConfig({
        devtool: 'cheap-module-source-map'
    });
    mix.sourceMaps();
} else {
    // In production
    // mix.babel('dist/asscroll.js', 'dist/asscroll.js')
}