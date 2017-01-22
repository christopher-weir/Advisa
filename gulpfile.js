'use strict';

const gulp = require( 'gulp' );
const gulpLoadPlugins = require( 'gulp-load-plugins' );
const plugins = gulpLoadPlugins();
const assets = require( './config.js' );
const webserver = require( 'gulp-webserver' );
const runSequence = require( 'run-sequence' );


gulp.task( 'webserver', function() {
    return gulp
        .src( './public' )
        .pipe( webserver( {
            open: true,
            fallback: 'index.html'
        } ) );
} );


gulp.task( 'sass', require( './gulp-tasks/sass' )( gulp, plugins ) );
gulp.task( 'webpack', require( './gulp-tasks/webpack' )( gulp, plugins ) );


// Watch Files For Changes
gulp.task( 'watch', function() {

    // // watch all client js
    gulp.watch(
        assets.js,
        [
            'webpack'
        ]
    );


    // watch all client sass
    gulp.watch(
        assets.sass,
        [
            'sass'
        ]
    );
} );


gulp.task( 'default', ( done ) => {
    runSequence(
        'sass',
        'webpack',
        'webserver',
        [
            'watch'
        ],
        done
    );
} );
