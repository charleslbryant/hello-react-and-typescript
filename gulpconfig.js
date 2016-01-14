'use strict';

var GulpConfig = (function () {
    function gulpConfig() {
        this.port = 9005;
        this.devBaseUrl = 'http://localhost';
        this.paths = {
            html: './src/*.html',
            css: [
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
                'node_modules/toastr/build/toastr.css'
            ],
            img: './src/images/*',
            js: './src/**/*.js',
            tsx: './src/**/*.tsx',
            tsf: './src/**/*.ts',
            dist: './dist',
            tsjsOut: './src',
            mainJs: './src/main.js'
        };
    }
    return gulpConfig;
})();
module.exports = GulpConfig;