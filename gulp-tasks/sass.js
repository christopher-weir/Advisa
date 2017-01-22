'use strict';


module.exports = function ( gulp, plugins ) {

    return function () {
        return gulp
            .src(
                'src/sass/*.scss',
            {
                base: '.'
            }
            )
            .pipe( plugins.sass() )
            .pipe( plugins.concat( 'site.css' ) )
            .pipe( gulp.dest( './public/css' ) );
    };
};
