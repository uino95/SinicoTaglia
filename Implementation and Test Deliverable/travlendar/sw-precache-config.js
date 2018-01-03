module.exports = {
    staticFileGlobs: [
        '/index.html',
        '/travlendar-app.html',
        '/manifest.json',
        '/bower_components/webcomponentsjs/webcomponents-lite.js',
        '/images/*'
    ],
    externals: ['/'],
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
    ignoreUrlParametersMatching: [/^https:\/\/travlendar-plus\.firebaseapp\.com/],
    runtimeCaching: [{
        urlPattern: /this\\.is\\.a\\.regex/,
        handler: 'fastest'
    }]
}