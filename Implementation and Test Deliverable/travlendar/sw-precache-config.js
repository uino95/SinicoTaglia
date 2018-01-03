module.exports = {
    staticFileGlobs: [
        'manifest.json',
        'bower_components/webcomponentsjs/webcomponents-lite.js',
        'images/*'
    ],
    runtimeCaching: [{
        urlPattern: /\/bower_components\/webcomponentsjs\/.*.js/,
        handler: 'fastest',
        options: {
            cache: {
                name: 'webcomponentsjs-polyfills-cache'
            }
        }
    }]
}