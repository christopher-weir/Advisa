'use strict';

const assets = require( '../config.js' );


module.exports = function ( gulp, plugins ) {

    return function () {
        return gulp
            .src(
                assets.js
            )
            .pipe( plugins.concat( 'app.min.js' ) )
            .pipe( gulp.dest( 'public/js' ) );
    };
};
